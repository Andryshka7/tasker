import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities/User/User.entity'
import { User } from 'types'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

    async fetchUsers() {
        const users = await this.usersRepository.find({ relations: ['tasks'] })
        return users
    }

    async fetchUserById(id: number) {
        const user = await this.usersRepository.findOne({ where: { id }, relations: ['tasks'] })
        return user
    }

    async createUser(
        userDetails: Omit<User, 'id' | 'tasks' | 'createdTasks' | 'avatar'> & { avatar?: string }
    ) {
        const user = this.usersRepository.create(userDetails)
        return await this.usersRepository.save(user)
    }

    async updateUser(id: number, updateFields: Partial<User>) {
        await this.usersRepository.update({ id }, updateFields)
        return `User with id ${id} has been updated`
    }

    async findByEmail(email: string) {
        return await this.usersRepository.findOneBy({ email })
    }
}
