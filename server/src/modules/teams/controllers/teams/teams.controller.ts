import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { CreateTeamDto } from '../../dtos'
import { TeamsService, TokensService } from '../../services'

@Controller('teams')
export class TeamsController {
	constructor(
		private teamsService: TeamsService,
		private tokensService: TokensService
	) {}

	@Post()
	@UseInterceptors(FileInterceptor('image'))
	async createTeam(
		@Res({ passthrough: true }) response,
		@UploadedFile() file: Express.Multer.File,
		@Body() { teamName, ...user }: CreateTeamDto
	) {
		const creator = await this.teamsService.createUser(file, user)
		const team = await this.teamsService.createTeam({ name: teamName, creator })

		const { accessToken, refreshToken } = await this.tokensService.generateTokens(creator)

		await this.tokensService.saveRefreshToken({ token: refreshToken, user: creator })

		response.cookie('accessToken', accessToken, {
			maxAge: 1000 * 60 * 60 * 1,
			secure: true,
			httpOnly: true
		})
		response.cookie('refreshToken', refreshToken, {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			secure: true,
			httpOnly: true,
			path: '/auth/refresh'
		})

		return team
	}
}
