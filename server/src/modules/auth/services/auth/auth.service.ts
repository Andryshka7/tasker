import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities'
import { type User } from 'types'
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
	constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	async signIn({ email, password }: Pick<User, 'email' | 'password'>) {
		const user = await this.usersRepository.findOneBy({ email })

		if (!user || !(await compare(password, user.password))) {
			throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST)
		}

		return user
	}

	async fetchMe(id: number) {
		const user = await this.usersRepository.findOneBy({ id })
		return user
	}
}
