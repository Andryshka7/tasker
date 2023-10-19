import { Get, Post, Body, UsePipes, UseGuards, ValidationPipe, Controller } from '@nestjs/common'
import { UsersService } from 'modules/users/services/users.service'
import { CreateUserDto } from 'modules/users/dtos'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async fetchUsers() {
        return await this.usersService.fetchUsers()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.createUser(createUserDto)
    }
}
