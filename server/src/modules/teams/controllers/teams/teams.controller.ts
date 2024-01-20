import { CreateTeamDto } from 'modules/teams/dtos'

import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('teams')
export class TeamsController {
	@Post()
	@UseGuards(AuthGuard('jwt-access-token'))
	createTeam(@Body() team: CreateTeamDto) {}
}
