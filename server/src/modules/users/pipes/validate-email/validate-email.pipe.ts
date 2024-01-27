import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'

import { CreateUserDto } from '../../dtos'
import { UsersService } from '../../services'

@Injectable()
export class ValidateEmailPipe implements PipeTransform {
	constructor(private usersService: UsersService) {}
	async transform(user: CreateUserDto) {
		const email = user.email
		const userExists = await this.usersService.fetchUserBy({ email })
		if (userExists) {
			throw new HttpException('User with that email already exists!', HttpStatus.BAD_REQUEST)
		}
		return user
	}
}
