import { Get, Post, UsePipes, ValidationPipe, Controller, Body } from '@nestjs/common'
import { CreateUserDto } from 'modules/users/dtos/CreateUser.dto'
import { UsersService } from 'modules/users/services/users/users.service'

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
