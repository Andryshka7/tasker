import { CreateReportDto } from 'modules/reports/dtos'

import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('reports')
export class ReportsController {
	@Post()
	@UseGuards(AuthGuard('jwt-access-token'))
	@UseInterceptors(FileInterceptor('image'))
	createReport(@Body() createReportDto: CreateReportDto, @UploadedFile() file) {
		console.log(createReportDto, file)
	}
}
