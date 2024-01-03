import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TaskEntity, UserEntity } from 'typeorm/entities'
import { type UserFromRequest, type Task } from 'types'

@Injectable()
export class TaskService {
	constructor(
		@InjectRepository(TaskEntity) private tasksRepository: Repository<TaskEntity>,
		@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>
	) {}

	async fetchTasks() {
		return await this.tasksRepository.find({ relations: ['user', 'creator'] })
	}

	async createTask(taskDetails: Omit<Task, 'id' | 'creator'>, user: UserFromRequest) {
		const creator = await this.usersRepository.findOneBy({ id: user.id })
		const created = this.tasksRepository.create({ ...taskDetails, creator })
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
