import {
    Get,
    Post,
    Patch,
    Param,
    Body,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
    Controller
} from '@nestjs/common'
import { UsersService } from 'modules/users/services/users/users.service'
import { CreateUserDto, UpdateUserDto } from 'modules/users/dtos'

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

    @Patch(':id')
    async updateUsers(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        await this.usersService.updateUser(id, updateUserDto)
    }
}
