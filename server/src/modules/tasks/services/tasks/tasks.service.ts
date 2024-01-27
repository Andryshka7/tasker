import { Repository } from 'typeorm'
import { TaskEntity } from 'typeorm/entities'
import { CreateTaskPayload, Team, User } from 'types'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { UpdateTaskDto } from '../../dtos'

@Injectable()
export class TasksService {
	constructor(@InjectRepository(TaskEntity) private tasksRepository: Repository<TaskEntity>) {}

	async fetchTeamTasks(team: Team) {
		const tasks = await this.tasksRepository.find({
			where: { team },
			relations: ['user', 'creator']
		})

		return tasks.map((task) => {
			const { password: creatorPassword, ...creator } = task.creator
			if (task.user) {
				const { password: userPassword, ...user } = task.user
				return { ...task, user, creator }
			}
			return { ...task, creator }
		})
	}

	async createTask(taskDetails: CreateTaskPayload, creator: User) {
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
