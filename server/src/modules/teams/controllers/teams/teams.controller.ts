import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { CreateTeamDto } from '../../dtos'
import { TeamsService } from '../../services'

@Controller('teams')
export class TeamsController {
	constructor(private teamsService: TeamsService) {}

	@Post()
	@UseInterceptors(FileInterceptor('image'))
	async createTeam(
		@UploadedFile() file: Express.Multer.File,
		@Body() { teamName, ...user }: CreateTeamDto
	) {
		const creator = await this.teamsService.createUser(file, user)
		const team = await this.teamsService.createTeam({ name: teamName, creator })

		return team
	}
}
