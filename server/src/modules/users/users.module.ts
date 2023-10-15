import { Module } from '@nestjs/common'
import { UsersService } from './services/users/users.service'
import { UsersController } from './controllers/users/users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'typeorm/entities/UserEntity'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
