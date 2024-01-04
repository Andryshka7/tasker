import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { type Role } from 'types'

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
	role: Role
}
