import { hash } from 'bcrypt'

import { Injectable, PipeTransform } from '@nestjs/common'

import { CreateUserDto } from '../../dtos/CreateUser/CreateUser.dto'

@Injectable()
export class HashPasswordPipe implements PipeTransform {
	async transform(user: CreateUserDto) {
		if (user.password) {
			user.password = await hash(user.password, 10)
		}
		return user
	}
}
