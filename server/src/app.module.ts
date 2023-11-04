import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module'
import { TasksModule } from './modules/tasks/tasks.module'
import { AuthModule } from './modules/auth/auth.module'
import config from 'typeorm/config'

@Module({
	imports: [TypeOrmModule.forRoot(config), UsersModule, TasksModule, AuthModule],
	controllers: [],
	providers: []
})
export class AppModule {}
