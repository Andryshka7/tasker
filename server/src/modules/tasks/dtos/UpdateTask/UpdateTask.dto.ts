import { IsOptional, IsString } from 'class-validator'
import { type User } from 'types'

export class UpdateTaskDto {
	@IsString()
	@IsOptional()
	title: string

	@IsString()
	@IsOptional()
	description: string

	@IsString()
	@IsOptional()
	priority: number

	@IsString()
	@IsOptional()
	due: Date

	@IsString()
	@IsOptional()
	user: User
}
