import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TaskEntity } from 'typeorm/entities'
import { Task } from 'types'

@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskEntity) private tasksRepository: Repository<TaskEntity>) {}

    async fetchTasks() {
        return await this.tasksRepository.find({ relations: ['user', 'creator'] })
    }

    async createTask(task: Omit<Task, 'id' | 'user'>) {
        const created = this.tasksRepository.create(task)
        return await this.tasksRepository.save(created)
    }

    async updateTask(id: number, updateFields: Partial<Task>) {
        await this.tasksRepository.update(id, updateFields)
        return `Task with id ${id} has been updated`
    }

    async deleteAll() {
        await this.tasksRepository.delete({})
    }
}
