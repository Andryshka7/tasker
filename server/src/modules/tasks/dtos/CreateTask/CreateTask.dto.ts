import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Priority, Team, User } from 'types'

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

	@IsNotEmpty()
	team: Team

	@IsOptional()
	user: User
}
