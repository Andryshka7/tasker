import {
	Get,
	Post,
	Patch,
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
import { v4 as uuid } from 'uuid'
import { uploadFile } from 'helpers'

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
		if (file) {
			const name = uploadFile(file, uuid())
			return await this.usersService.createUser({
				...createUserDto,
				avatar: `http://localhost:4000/images/${name}`
			})
		}
		return await this.usersService.createUser({ ...createUserDto, avatar: null })
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	async updateUser(
		@Param('id', ParseIntPipe) id: number,
		@Body(HashPasswordPipe) updateUserDto: UpdateUserDto
	) {
		return await this.usersService.updateUser(id, updateUserDto)
	}
}
