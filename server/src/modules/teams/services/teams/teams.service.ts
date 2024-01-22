import { server } from 'config'
import { uploadFile } from 'helpers'
import { Repository } from 'typeorm'
import { TeamEntity, UserEntity } from 'typeorm/entities'
import { Role, Team } from 'types'
import { v4 as uuid } from 'uuid'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateTeamDto } from '../../dtos'

@Injectable()
export class TeamsService {
	constructor(
		@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
		@InjectRepository(TeamEntity) private teamsRepository: Repository<TeamEntity>
	) {}

	async createUser(
		file: Express.Multer.File,
		createUserDto: Pick<CreateTeamDto, 'name' | 'surname' | 'email' | 'password'>
	) {
		const userDetails = { ...createUserDto, role: 'admin' as Role, avatar: null }

		if (file) {
			const fileName = uploadFile(file, uuid())
			userDetails.avatar = `${server}/images/${fileName}`
		}
		const user = this.usersRepository.create(userDetails)
		return await this.usersRepository.save(user)
	}

	async createTeam(teamDetails: Pick<Team, 'name' | 'creator'>) {
		const team = await this.teamsRepository.create({
			...teamDetails,
			users: [teamDetails.creator]
		})
		return team
	}
}
