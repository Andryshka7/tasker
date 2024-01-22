import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTeamDto {
	@IsNotEmpty()
	@IsString()
	teamName: string

	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsString()
	surname: string

	@IsNotEmpty()
	@IsString()
	email: string

	@IsNotEmpty()
	@IsString()
	password: string
}
