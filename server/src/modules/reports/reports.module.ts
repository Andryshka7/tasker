import { Module } from '@nestjs/common'

import { ReportsController } from './controllers'
import { ServicesService } from './services/reports/services.service'

@Module({
	controllers: [ReportsController, ReportsController],
	providers: [ServicesService]
})
export class ReportsModule {}
