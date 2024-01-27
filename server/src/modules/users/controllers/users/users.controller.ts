import { GetUser } from 'common/decorators'
import { IsModeratorGuard } from 'common/guards'
import { UserFromRequest } from 'types'

import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UploadedFile,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { FileInterceptor } from '@nestjs/platform-express'

import { CreateUserDto, UpdateUserDto } from '../../dtos'
import { HashPasswordPipe, ValidateEmailPipe } from '../../pipes'
import { UsersService } from '../../services'

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get()
	@UseGuards(AuthGuard('jwt-access-token'))
	async fetchUsers(@GetUser() userFromRequest: UserFromRequest) {
		const { team } = userFromRequest
		const teamUsers = await this.usersService.fetchTeamUsers(team)
		return teamUsers
	}

	@Post()
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	@UseInterceptors(FileInterceptor('image'))
	async createUser(
		@GetUser() userFromRequest: UserFromRequest,
		@UploadedFile() file: Express.Multer.File,
		@Body(HashPasswordPipe, ValidateEmailPipe) createUserDto: CreateUserDto
	) {
		const { team } = userFromRequest
		const user = await this.usersService.createUser(file, { ...createUserDto, team })
		return user
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	@UseInterceptors(FileInterceptor('image'))
	async updateUser(
		@UploadedFile() file: Express.Multer.File,
		@Param('id', ParseIntPipe) id: number,
		@Body(HashPasswordPipe) updateUserDto: UpdateUserDto
	) {
		const user = await this.usersService.updateUser(id, file, updateUserDto)
		return user
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsModeratorGuard)
	@UseInterceptors(FileInterceptor('image'))
	async deleteUser(@Param('id', ParseIntPipe) id: number) {
		await this.usersService.deleteUser(id)
		return true
	}
}
