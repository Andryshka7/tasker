import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TaskEntity } from 'typeorm/entities'
import { Task, User } from 'types'

@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskEntity) private tasksRepository: Repository<TaskEntity>) {}

    async fetchTasks() {
        return await this.tasksRepository.find({ relations: ['user'] })
    }

    async createTask(creator: User, task: Omit<Task, 'id' | 'user' | 'creator'>) {
        const created = this.tasksRepository.create(task)
        created.creator = creator
        console.log(created)

        return await this.tasksRepository.save(created)
    }
}
