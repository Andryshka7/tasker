import {
	Get,
	Post,
	Patch,
	Delete,
	Body,
	UseGuards,
	UseInterceptors,
	UploadedFile,
	ParseIntPipe,
	Controller,
	Param
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { IsAdminGuard } from 'common/guards'
import { UsersService } from '../../services'
import { CreateUserDto, UpdateUserDto } from '../../dtos'
import { HashPasswordPipe, ValidateEmailPipe } from '../../pipes'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get()
	@UseGuards(AuthGuard('jwt-access-token'))
	async fetchUsers() {
		return await this.usersService.fetchUsers()
	}

	@Post()
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	@UseInterceptors(FileInterceptor('image'))
	async createUser(
		@UploadedFile() file: Express.Multer.File,
		@Body(HashPasswordPipe, ValidateEmailPipe) createUserDto: CreateUserDto
	) {
		return await this.usersService.createUser(file, createUserDto)
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	@UseInterceptors(FileInterceptor('image'))
	async updateUser(
		@UploadedFile() file: Express.Multer.File,
		@Param('id', ParseIntPipe) id: number,
		@Body(HashPasswordPipe) updateUserDto: UpdateUserDto
	) {
		return await this.usersService.updateUser(id, file, updateUserDto)
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	@UseInterceptors(FileInterceptor('image'))
	async deleteUser(@Param('id', ParseIntPipe) id: number) {
		return await this.usersService.deleteUser(id)
	}
}
