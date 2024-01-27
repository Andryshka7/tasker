import { hash } from 'bcrypt'

import { Injectable, PipeTransform } from '@nestjs/common'

import { CreateTeamDto } from '../../dtos'

@Injectable()
export class HashPasswordPipe implements PipeTransform {
	async transform(createTeamDto: CreateTeamDto) {
		createTeamDto.password = await hash(createTeamDto.password, 10)
		return createTeamDto
	}
}
