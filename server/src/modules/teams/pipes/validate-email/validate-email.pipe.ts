import { UsersService } from 'modules/users/services'

import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'

import { CreateTeamDto } from '../../dtos/CreateTeam/CreateTeam.dto'

@Injectable()
export class ValidateEmailPipe implements PipeTransform {
	constructor(private usersService: UsersService) {}
	async transform(createTeamDto: CreateTeamDto) {
		const email = createTeamDto.email
		if (await this.usersService.fetchUserBy({ email })) {
			throw new HttpException('User with that email already exists!', HttpStatus.BAD_REQUEST)
		}
		return createTeamDto
	}
}
