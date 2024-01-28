import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Priority, User } from 'types'

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsNotEmpty()
	@IsString()
	description: string

	@IsNotEmpty()
	@IsNumber()
	priority: Priority

	@IsNotEmpty()
	@IsString()
	due: string

	@IsOptional()
	user: User
}
