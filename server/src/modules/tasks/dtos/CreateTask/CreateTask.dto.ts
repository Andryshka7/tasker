import { IsNotEmpty, IsOptional } from 'class-validator'
import { type Priority, type User } from 'types'

export class CreateTaskDto {
	@IsNotEmpty()
	title: string

	@IsNotEmpty()
	description: string

	@IsNotEmpty()
	priority: Priority

	@IsNotEmpty()
	completed: boolean

	@IsNotEmpty()
	due: Date

	@IsOptional()
	user: User
}
