import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Role, Team } from 'types'

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsString()
	surname: string

	@IsNotEmpty()
	@IsEmail()
	email: string

	@IsNotEmpty()
	@IsString()
	password: string

	@IsNotEmpty()
	@IsString()
	team: Team

	@IsNotEmpty()
	@IsString()
	role: Role
}
