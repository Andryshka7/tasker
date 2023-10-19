import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities/UserEntity'
import { User } from 'types'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

    async fetchUsers() {
        const users = await this.usersRepository.find({ relations: ['tasks'] })
        return users
    }
    async createUser(user: Omit<User, 'id' | 'tasks'>) {
        const created = this.usersRepository.create(user)
        return await this.usersRepository.save(created)
    }
}
