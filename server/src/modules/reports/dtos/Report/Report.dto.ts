import { IsNotEmpty } from 'class-validator'

export class CreateReportDto {
	@IsNotEmpty()
	name: string
	@IsNotEmpty()
	description: string
}
