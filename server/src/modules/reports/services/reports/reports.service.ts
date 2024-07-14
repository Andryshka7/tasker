import { uploadFile } from 'helpers'
import { CreateReportDto } from 'modules/reports/dtos'
import { Repository } from 'typeorm'
import { ReportEntity, ReportImageEntity } from 'typeorm/entities'

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
		const images = await Promise.all(
			files.map(async (image) => {
				const url = await uploadFile(image)
				return this.reportImagesRepository.create({ url })
			})
		)

		const report = this.reportsRepository.create({ ...createReportDto, images })
		await this.reportsRepository.save(report)

		await Promise.all(
			images.map((image) => this.reportImagesRepository.save({ ...image, report }))
		)

		return report
	}
}
