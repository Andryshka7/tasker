import config from 'typeorm/config'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule, TasksModule, TeamsModule, UsersModule } from './modules'
import { ReportsModule } from './modules/reports/reports.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(config),
		UsersModule,
		TasksModule,
		TeamsModule,
		AuthModule,
		ReportsModule
	]
})
export class AppModule {}
