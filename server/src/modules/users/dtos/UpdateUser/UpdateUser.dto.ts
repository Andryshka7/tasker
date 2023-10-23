import { IsOptional, IsString } from 'class-validator'

export class UpdateUserDto {
    @IsString()
    name: string

    @IsString()
    surname: string

    @IsString()
    email: string

    @IsString()
    password: string

    @IsString()
    role: string

    @IsString()
    @IsOptional()
    avatar: string
}
