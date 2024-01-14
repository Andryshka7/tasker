import { GetUser } from 'common/decorators'
import { IsAdminGuard, IsModeratorGuard } from 'common/guards'
import { UserFromRequest } from 'types'

import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { CreateTaskDto, UpdateTaskDto } from '../../dtos'
import { ValidateTaskPipe } from '../../pipes'
import { TaskService } from '../../services'

@Controller('tasks')
export class TaskController {
	constructor(private tasksService: TaskService) {}

	@Get()
	async fetchTasks() {
		return await this.tasksService.fetchTasks()
	}

	@Post()
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	async createTask(
		@GetUser() user: UserFromRequest,
		@Body(ValidateTaskPipe) createTaskDto: CreateTaskDto
	) {
		return this.tasksService.createTask(createTaskDto, user)
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'))
	async updateTask(
		@Param('id', ParseIntPipe) id: number,
		@Body(ValidateTaskPipe) updateTaskDto: UpdateTaskDto
	) {
		await this.tasksService.updateTask(id, updateTaskDto)
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	async deleteUser(@Param('id', ParseIntPipe) id: number) {
		return await this.tasksService.deleteTask(id)
	}
}
