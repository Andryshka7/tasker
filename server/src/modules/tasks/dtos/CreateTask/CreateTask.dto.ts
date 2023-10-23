import { IsNotEmpty, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { User } from 'types'

export class CreateTaskDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    priority: number

    @IsNotEmpty()
    due: Date

    @Type()
    @IsOptional()
    user: User
}
