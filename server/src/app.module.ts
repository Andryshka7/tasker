import * as path from 'path'
import config from 'typeorm/config'

import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule, TasksModule, UsersModule } from './modules'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			serveRoot: '/images',
			rootPath: path.join(__dirname, '..', 'images')
		}),
		MulterModule.register({ dest: '../images' }),
		TypeOrmModule.forRoot(config),
		UsersModule,
		TasksModule,
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
