import { IsNotEmpty, IsOptional } from 'class-validator'
import { Priority, User } from 'types'

export class CreateTaskDto {
	@IsNotEmpty()
	title: string

	@IsNotEmpty()
	description: string

	@IsNotEmpty()
	priority: Priority

	@IsNotEmpty()
	due: string

	@IsOptional()
	user: User
}
