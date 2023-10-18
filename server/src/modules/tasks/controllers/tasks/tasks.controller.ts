import { Get, Post, Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common'
import { TaskService } from '../../services/tasks/tasks.service'
import { CreateTaskDto } from '../../dtos/CreateTaskDto'

@Controller('tasks')
export class TaskController {
    constructor(private tasksService: TaskService) {}

    @Get()
    async fetchTasks() {
        return await this.tasksService.fetchTasks()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createTask(@Body() createTaskDto: CreateTaskDto) {
        const user = {
            id: 1,
            avatar: null,
            name: 'Andrey',
            surname: 'Lapchik',
            password: '0000',
            role: 'admin',
            tasks: []
        }
        return await this.tasksService.createTask(user, createTaskDto)
    }
}
