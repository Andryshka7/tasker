import { Get, Post, Body, Controller, UseGuards, ParseIntPipe, Patch, Delete, Param } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { IsModeratorGuard } from 'common/guards'
import { GetUser } from 'common/decorators'
import { TaskService } from '../../services'
import { CreateTaskDto, UpdateTaskDto } from '../../dtos'
import { ValidateTaskPipe } from '../../pipes'
import { type User } from 'types'

@Controller('tasks')
export class TaskController {
	constructor(private tasksService: TaskService) {}

	@Get()
	async fetchTasks() {
		return await this.tasksService.fetchTasks()
	}

	@Post()
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	async createTask(@GetUser() user: User, @Body(ValidateTaskPipe) createTaskDto: CreateTaskDto) {
		const taskDetails = {
			...createTaskDto,
			creator: user
		}
		return this.tasksService.createTask(taskDetails)
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	async updateTask(
		@Param('id', ParseIntPipe) id: number,
		@Body(ValidateTaskPipe) updateFields: UpdateTaskDto
	) {
		await this.tasksService.updateTask(id, updateFields)
	}

	@Delete()
	deleteTask() {
		return this.tasksService.deleteAll()
	}
}
