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
		return users.map(({ id, name, surname, role, email, avatar }) => ({
			id,
			name,
			surname,
			role,
			email,
			avatar
		}))
	}

	async fetchUserById(id: number) {
		const user = await this.usersRepository.findOne({ where: { id }, relations: ['tasks'] })
		return user
	}

	async createUser(userDetails: Omit<User, 'id' | 'tasks' | 'createdTasks'>) {
		const user = this.usersRepository.create(userDetails)
		return await this.usersRepository.save(user)
	}

	async updateUser(id: number, updateFields: Partial<User>) {
		return await this.usersRepository.update({ id }, updateFields)
	}

	async findByEmail(email: string) {
		return await this.usersRepository.findOneBy({ email })
	}
}
