import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { host, username, password, database } from 'config'
import { UsersModule } from 'modules/users/users.module'
import { UserEntity } from 'typeorm/entities/UserEntity'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host,
            username,
            password,
            database,
            entities: [UserEntity],
            synchronize: true
        }),
        UsersModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
