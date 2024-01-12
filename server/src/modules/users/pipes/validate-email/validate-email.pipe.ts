import { CreateUserDto } from 'modules/users/dtos'
import { UsersService } from 'modules/users/services'

import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class ValidateEmailPipe implements PipeTransform {
	constructor(private usersService: UsersService) {}
	async transform(user: CreateUserDto) {
		const email = user.email
		if (await this.usersService.fetchUserBy({ email })) {
			throw new HttpException('User with that email already exists!', HttpStatus.BAD_REQUEST)
		}
		return user
	}
}
