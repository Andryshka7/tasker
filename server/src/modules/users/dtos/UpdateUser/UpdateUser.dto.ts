import { IsOptional, IsString } from 'class-validator'

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
	role: string

	@IsString()
	@IsOptional()
	removeAvatar: string
}
