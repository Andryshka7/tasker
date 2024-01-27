import { Injectable, PipeTransform } from '@nestjs/common'

import { CreateTaskDto } from '../../dtos'

@Injectable()
export class ValidateTaskPipe implements PipeTransform {
	transform(task: CreateTaskDto) {
		const { priority } = task
		const transformed = {
			...task,
			priority: priority ? Number(priority) : undefined
		}

		return transformed
	}
}
