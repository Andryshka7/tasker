import { uploadFile } from 'helpers'
import { FindOptionsWhere, Repository } from 'typeorm'
import { TeamEntity, UserEntity } from 'typeorm/entities'
import { Role } from 'types'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateTeamDto } from '../../dtos'

@Injectable()
export class TeamsService {
	constructor(
		@InjectRepository(TeamEntity) private teamsRepository: Repository<TeamEntity>,
		@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>
	) {}

	async fetchBy(options: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>) {
		const team = await this.usersRepository.findBy(options)
		return team
	}

	async createTeam(file, createTeamDto: CreateTeamDto) {
		const date = new Date()

		const { teamName, ...user } = createTeamDto
		const userDetails = { ...user, role: 'admin' as Role, avatar: null }

		if (file) {
			userDetails.avatar = await uploadFile(file)
		}

		const creator = this.usersRepository.create({
			...userDetails,
			lastActive: date.toISOString()
		})

		const team = this.teamsRepository.create({
			name: teamName,
			users: [creator]
		})

		creator.team = team

		const createdTeam = await this.teamsRepository.save(team)
		const createdUser = await this.usersRepository.save(creator)

		return [createdUser, createdTeam] as [UserEntity, TeamEntity]
	}
}
