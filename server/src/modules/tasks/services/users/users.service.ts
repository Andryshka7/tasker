import { FindOptionsWhere, Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	async fetchUserBy(options: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[]) {
		const user = await this.usersRepository.findOneBy(options)
		return user
	}
}
