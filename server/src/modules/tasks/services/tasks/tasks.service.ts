import { UpdateTaskDto } from 'modules/tasks/dtos'
import { Repository } from 'typeorm'
import { TaskEntity, UserEntity } from 'typeorm/entities'
import { CreateTaskPayload, UserFromRequest } from 'types'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TaskService {
	constructor(
		@InjectRepository(TaskEntity) private tasksRepository: Repository<TaskEntity>,
		@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>
	) {}

	async fetchTasks() {
		const tasks = await this.tasksRepository.find({ relations: ['user', 'creator'] })

		return tasks.map((task) => {
			if (task.user) {
				const { password, ...user } = task.user
				return { ...task, user }
			}
			return task
		})
	}

	async createTask(taskDetails: CreateTaskPayload, user: UserFromRequest) {
		const creator = await this.usersRepository.findOneBy({ id: user.id })
		const created = this.tasksRepository.create({ ...taskDetails, creator })
		return await this.tasksRepository.save(created)
	}

	async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
		if (Object.keys(updateTaskDto).length) {
			await this.tasksRepository.update({ id }, updateTaskDto)
		}
		await this.tasksRepository.update(id, updateTaskDto)
		return `Task with id ${id} has been updated`
	}

	async deleteTask(id: number) {
		await this.tasksRepository.delete({ id })
	}
}
