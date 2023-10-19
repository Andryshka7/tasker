import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from 'modules/users/users.module'
import { TasksModule } from './modules/tasks/tasks.module'
import { UserEntity, TaskEntity } from 'typeorm/entities'
import { host, username, password, database } from 'config'
import { AuthModule } from './modules/auth/auth.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host,
            username,
            password,
            database,
            entities: [UserEntity, TaskEntity],
            synchronize: true
        }),
        UsersModule,
        TasksModule,
        AuthModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
