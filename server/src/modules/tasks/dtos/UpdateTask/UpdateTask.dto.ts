import { IsOptional, IsString } from 'class-validator'
import { type Priority, type User } from 'types'

export class UpdateTaskDto {
	@IsOptional()
	title: string

	@IsOptional()
	description: string

	@IsOptional()
	priority: Priority

	@IsOptional()
	due: string

	@IsOptional()
	user: User
}
