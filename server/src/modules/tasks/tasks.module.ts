import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskService } from './services/tasks/tasks.service'
import { TaskController } from './controllers/tasks/tasks.controller'
import { TaskEntity } from 'typeorm/entities'

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity])],
	providers: [TaskService],
	controllers: [TaskController]
})
export class TasksModule {}
