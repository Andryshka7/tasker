import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { deleteFile, uploadFile } from 'helpers'
import { FindOptionsWhere, Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities'
import { CreateUserPayload, Team, UpdateUserPayload } from 'types'

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
			userDetails.avatar = await uploadFile(file)
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
			await deleteFile(avatar)
		}

		if (file) {
			updateUserPayload.avatar = await uploadFile(file)
		}

		if (Object.keys(updateUserPayload).length) {
			await this.usersRepository.update({ id }, updateUserPayload)
		}

		return true
	}

	async deleteUser(id: number) {
		const { avatar } = await this.usersRepository.findOneBy({ id })
		if (avatar) {
			await deleteFile(avatar)
		}
		await this.usersRepository.delete({ id })
		return true
	}
}
