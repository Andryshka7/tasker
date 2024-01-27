import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'

import { CreateTeamDto } from '../../dtos'
import { UsersService } from '../../services'

@Injectable()
export class ValidateEmailPipe implements PipeTransform {
	constructor(private usersService: UsersService) {}
	async transform(createTeamDto: CreateTeamDto) {
		const email = createTeamDto.email
		const userExists = await this.usersService.fetchUserBy({ email })
		if (userExists) {
			throw new HttpException('User with that email already exists!', HttpStatus.BAD_REQUEST)
		}
		return createTeamDto
	}
}
