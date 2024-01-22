import { TeamEntity, UserEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TeamsController } from './controllers'
import { TeamsService } from './services'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, TeamEntity])],
	providers: [TeamsService],
	controllers: [TeamsController]
})
export class TeamsModule {}
