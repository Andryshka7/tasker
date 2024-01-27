import { server } from 'config'
import { deleteFile, getFilePath, uploadFile } from 'helpers'
import { FindOptionsWhere, Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities'
import { CreateUserPayload, Team, UpdateUserPayload } from 'types'
import { v4 as uuid } from 'uuid'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { UpdateUserDto } from '../../dtos'

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	async fetchTeamUsers(team: Team) {
		const users = await this.usersRepository.find({ where: { team }, relations: ['team'] })
		return users.map(({ password, ...user }) => user)
	}

	async fetchUserBy(options: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[]) {
		const user = await this.usersRepository.findOneBy(options)
		return user
	}

	async createUser(file: Express.Multer.File, createUserDto: Omit<CreateUserPayload, 'avatar'>) {
		const userDetails = { ...createUserDto, avatar: null }

		if (file) {
			const fileName = uploadFile(file, uuid())
			userDetails.avatar = `${server}/images/${fileName}`
		}

		const user = this.usersRepository.create(userDetails)
		return await this.usersRepository.save(user)
	}

	async updateUser(id: number, file: Express.Multer.File, updateUserDto: UpdateUserDto) {
		const { avatar } = await this.fetchUserBy({ id })

		const { removeAvatar, ...updateFields } = updateUserDto

		const updateUserPayload: UpdateUserPayload = { ...updateFields, avatar }

		if (removeAvatar) {
			updateUserPayload.avatar = null
			deleteFile(getFilePath(avatar.slice(29)))
		}

		if (file) {
			const fileName = uploadFile(file, uuid())
			updateUserPayload.avatar = `http://localhost:4000/images/${fileName}`
		}

		if (Object.keys(updateUserPayload).length) {
			await this.usersRepository.update({ id }, updateUserPayload)
		}

		return true
	}

	async deleteUser(id: number) {
		const { avatar } = await this.usersRepository.findOneBy({ id })
		if (avatar) {
			deleteFile(getFilePath(avatar.slice(29)))
		}
		await this.usersRepository.delete({ id })
		return true
	}
}
