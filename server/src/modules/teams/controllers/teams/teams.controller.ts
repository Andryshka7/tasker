import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { CreateTeamDto } from '../../dtos'
import { HashPasswordPipe, ValidateEmailPipe } from '../../pipes'
import { TeamsService, TokensService } from '../../services'
import { domainName } from 'config'

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
		@Body(HashPasswordPipe, ValidateEmailPipe) createTeamDto: CreateTeamDto
	) {
		const [creator, team] = await this.teamsService.createTeam(file, createTeamDto)

		const { accessToken, refreshToken } = await this.tokensService.generateTokens(creator)

		await this.tokensService.saveRefreshToken({ token: refreshToken, user: creator })

		response.cookie('accessToken', accessToken, {
			maxAge: 1000 * 60 * 60 * 1,
			sameSite: 'none',
			secure: true,
			httpOnly: true,
			domain: domainName
		})
		response.cookie('refreshToken', refreshToken, {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			sameSite: 'none',
			secure: true,
			httpOnly: true,
			domain: domainName,
			path: '/auth/refresh'
		})

		return team
	}
}
