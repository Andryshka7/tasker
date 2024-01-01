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
import { v4 as uuid } from 'uuid'
import { deleteFile, getFilePath, uploadFile } from 'helpers'
import { CreateUserPayload, UpdateUserPayload, type User } from 'types'

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
		const createUserPayload: CreateUserPayload = { ...createUserDto, avatar: null }

		if (file) {
			const fileName = uploadFile(file, uuid())
			createUserPayload.avatar = `http://localhost:4000/images/${fileName}`
		}

		return await this.usersService.createUser(createUserPayload)
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	@UseInterceptors(FileInterceptor('image'))
	async updateUser(
		@UploadedFile() file: Express.Multer.File,
		@Param('id', ParseIntPipe) id: number,
		@Body(HashPasswordPipe) updateUserDto: UpdateUserDto
	) {
		const { avatar } = await this.usersService.findById(id)

		const { removeAvatar, ...updateFields } = updateUserDto

		const updateUserPayload: UpdateUserPayload = { ...updateFields, avatar }

		if (removeAvatar) {
			updateUserPayload.avatar = null
			deleteFile(getFilePath(avatar.slice(29)))
		}

		if (file) {
			const fileName = uploadFile(file, uuid())
			updateUserPayload.avatar = `http://localhost:4000/images/${fileName}`
		}

		return await this.usersService.updateUser(id, updateUserPayload)
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt-access-token'), IsAdminGuard)
	@UseInterceptors(FileInterceptor('image'))
	async deleteUser(@Param('id', ParseIntPipe) id: number) {
		return await this.usersService.deleteUser(id)
	}
}
