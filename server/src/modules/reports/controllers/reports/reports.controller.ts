import { CreateReportDto } from 'modules/reports/dtos'
import { ReportsService } from 'modules/reports/services'

import { Body, Controller, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { FilesInterceptor } from '@nestjs/platform-express'

@Controller('reports')
export class ReportsController {
	constructor(private reportsService: ReportsService) {}

	@Post()
	@UseGuards(AuthGuard('jwt-access-token'))
	@UseInterceptors(FilesInterceptor('image'))
	async createReport(
		@Body() createReportDto: CreateReportDto,
		@UploadedFiles() files: Express.Multer.File[]
	) {
		const report = await this.reportsService.createReport(files, createReportDto)
		return report
	}
}
