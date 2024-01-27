import { GetUser } from 'common/decorators'
import { IsModeratorGuard } from 'common/guards'
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
import { TasksService, UsersService } from '../../services'

@Controller('tasks')
export class TaskController {
	constructor(
		private tasksService: TasksService,
		private usersService: UsersService
	) {}

	@Get()
	@UseGuards(AuthGuard('jwt-access-token'))
	async fetchTasks(@GetUser() userFromRequest: UserFromRequest) {
		const { team } = userFromRequest
		return await this.tasksService.fetchTeamTasks(team)
	}

	@Post()
	@UseGuards(AuthGuard('jwt-access-token'))
	async createTask(
		@GetUser() userFromRequest: UserFromRequest,
		@Body(ValidateTaskPipe) createTaskDto: CreateTaskDto
	) {
		const user = await this.usersService.fetchUserBy(userFromRequest)
		const task = await this.tasksService.createTask(createTaskDto, user)
		return task
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'))
	async updateTask(
		@Param('id', ParseIntPipe) id: number,
		@Body(ValidateTaskPipe) updateTaskDto: UpdateTaskDto
	) {
		const task = await this.tasksService.updateTask(id, updateTaskDto)
		return task
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	async deleteUser(@Param('id', ParseIntPipe) id: number) {
		await this.tasksService.deleteTask(id)
		return true
	}
}
