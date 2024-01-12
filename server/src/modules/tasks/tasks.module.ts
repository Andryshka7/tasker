import { TaskEntity, UserEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TaskController } from './controllers'
import { TaskService } from './services'

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
	providers: [TaskService],
	controllers: [TaskController]
})
export class TasksModule {}
