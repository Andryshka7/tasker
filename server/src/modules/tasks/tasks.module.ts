import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskService } from './services'
import { TaskController } from './controllers'
import { TaskEntity, UserEntity } from 'typeorm/entities'

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
	providers: [TaskService],
	controllers: [TaskController]
})
export class TasksModule {}
