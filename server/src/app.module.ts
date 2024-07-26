import config from 'typeorm/config'
import { join } from 'path'

import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule, TasksModule, TeamsModule, UsersModule } from './modules'
import { ReportsModule } from './modules/reports/reports.module'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			serveRoot: '/images',
			rootPath: join(__dirname, '..', 'images')
		}),
		TypeOrmModule.forRoot(config),
		UsersModule,
		TasksModule,
		TeamsModule,
		AuthModule,
		ReportsModule
	]
})
export class AppModule {}
