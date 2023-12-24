import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module'
import { TasksModule } from './modules/tasks/tasks.module'
import { AuthModule } from './modules/auth/auth.module'
import config from 'typeorm/config'
import { MulterModule } from '@nestjs/platform-express'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

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
