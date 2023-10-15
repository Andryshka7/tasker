import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    surname: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    role: string

    avatar?: string
}
