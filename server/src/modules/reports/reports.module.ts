import { ReportEntity, ReportImageEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ReportsController } from './controllers'
import { ReportsService } from './services/reports/reports.service'

@Module({
	imports: [TypeOrmModule.forFeature([ReportEntity, ReportImageEntity])],

	controllers: [ReportsController, ReportsController],
	providers: [ReportsService]
})
export class ReportsModule {}
