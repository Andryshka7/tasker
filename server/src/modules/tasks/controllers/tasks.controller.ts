import { Get, Post, Req, Body, Controller, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common'
import { TaskService } from '../services/tasks.service'
import { CreateTaskDto } from '../dtos/CreateTaskDto.dto'
import { AuthGuard } from 'modules/shared/guards'
import { RequestWithUser } from 'types'

@Controller('tasks')
export class TaskController {
    constructor(private tasksService: TaskService) {}

    @Get()
    async fetchTasks() {
        return await this.tasksService.fetchTasks()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @UseGuards(AuthGuard)
    async createTask(@Req() request: RequestWithUser, @Body() createTaskDto: CreateTaskDto) {
        return await this.tasksService.createTask(request.user, createTaskDto)
    }
}
