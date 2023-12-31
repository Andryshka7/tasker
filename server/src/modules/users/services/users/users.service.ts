import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities/User/User.entity'
import { type User } from 'types'

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	async fetchUsers() {
		const users = await this.usersRepository.find()
		return users
	}

	async fetchUserById(id: number) {
		const user = await this.usersRepository.findOne({ where: { id }, relations: ['tasks'] })
		return user
	}

	async createUser(userDetails: Omit<User, 'id' | 'tasks' | 'createdTasks'>) {
		const user = this.usersRepository.create(userDetails)
		return await this.usersRepository.save(user)
	}

	async updateUser(id: number, updateFields: Partial<User> & { avatar?: string | null }) {
		if (Object.keys(updateFields).length) {
			await this.usersRepository.update({ id }, updateFields)
		}
		return true
	}

	async findByEmail(email: string) {
		const user = await this.usersRepository.findOneBy({ email })
		return user
	}

	async findById(id: number) {
		const user = await this.usersRepository.findOneBy({ id })
		return user
	}
}
