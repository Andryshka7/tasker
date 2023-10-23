import { Injectable, PipeTransform } from '@nestjs/common'
import { CreateTaskDto } from '../../dtos/CreateTask/CreateTask.dto'

@Injectable()
export class ValidateTaskPipe implements PipeTransform {
    transform(task: CreateTaskDto) {
        const { priority, due } = task
        const transformed = {
            ...task,
            priority: priority ? Number(priority) : undefined,
            due: due ? new Date(due) : undefined
        }

        return transformed
    }
}
