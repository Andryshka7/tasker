import { Get, Post, Patch, Body, UseGuards, ParseIntPipe, Controller, Param } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { IsAdminGuard } from 'common/guards'
import { UsersService } from '../../services'
import { CreateUserDto, UpdateUserDto } from '../../dtos'
import { EmailIsUnique } from '../../guards'
import { HashPasswordPipe } from '../../pipes'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async fetchUsers() {
        const users = await this.usersService.fetchUsers()
        return users
    }
    @Get(':id')
    async fetchUser(@Param('id', ParseIntPipe) id: number) {
        const users = await this.usersService.fetchUsers()

        const user = users.find(({ id: userId }) => id === userId)
        console.log(user, users)

        return user
    }

    @Post()
    @UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard, EmailIsUnique)
    createUser(@Body(HashPasswordPipe) createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(HashPasswordPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id, updateUserDto)
    }
}
