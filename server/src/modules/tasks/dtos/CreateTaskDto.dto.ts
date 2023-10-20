import { IsNotEmpty } from 'class-validator'
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

    user: User
}
