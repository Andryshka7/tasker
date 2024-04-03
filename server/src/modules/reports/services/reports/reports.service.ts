import { uploadFile } from 'helpers'
import { CreateReportDto } from 'modules/reports/dtos'
import { Repository } from 'typeorm'
import { ReportEntity, ReportImageEntity } from 'typeorm/entities'
import { v4 as uuid } from 'uuid'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ReportsService {
	constructor(
		@InjectRepository(ReportEntity) private reportsRepository: Repository<ReportEntity>,
		@InjectRepository(ReportImageEntity)
		private reportImagesRepository: Repository<ReportImageEntity>
	) {}

	async createReport(files: Express.Multer.File[], createReportDto: CreateReportDto) {
		const images = files.map((image) => {
			const name = uploadFile(image, uuid())
			return this.reportImagesRepository.create({ name })
		})

		const report = this.reportsRepository.create({ ...createReportDto, images })
		await this.reportsRepository.save(report)

		await Promise.all(
			images.map((image) => this.reportImagesRepository.save({ ...image, report }))
		)

		return report
	}
}
