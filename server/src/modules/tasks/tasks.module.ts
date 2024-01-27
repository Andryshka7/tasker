import { TaskEntity, UserEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TaskController } from './controllers'
import { TasksService, UsersService } from './services'

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
	providers: [TasksService, UsersService],
	controllers: [TaskController]
})
export class TasksModule {}
