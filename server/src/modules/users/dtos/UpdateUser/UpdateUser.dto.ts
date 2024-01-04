import { IsOptional, IsString } from 'class-validator'
import { type Role } from 'types'

export class UpdateUserDto {
	@IsString()
	@IsOptional()
	name: string

	@IsString()
	@IsOptional()
	surname: string

	@IsString()
	@IsOptional()
	email: string

	@IsString()
	@IsOptional()
	password: string

	@IsString()
	@IsOptional()
	role: Role

	@IsString()
	@IsOptional()
	removeAvatar: string
}
