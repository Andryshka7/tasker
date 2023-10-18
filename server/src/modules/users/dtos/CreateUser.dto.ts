import { IsNotEmpty } from 'class-validator'

class CreateUserDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    surname: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    role: string

    avatar: string
}

export default CreateUserDto
