import { RefreshTokenEntity, TeamEntity, UserEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TeamsController } from './controllers'
import { TeamsService, TokensService } from './services'
import { UsersService } from './services/users/users.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([UserEntity, TeamEntity, RefreshTokenEntity]),
		JwtModule.register({})
	],
	providers: [TeamsService, TokensService, UsersService],
	controllers: [TeamsController]
})
export class TeamsModule {}
