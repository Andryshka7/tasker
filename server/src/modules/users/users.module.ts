import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './services'
import { UsersController } from './controllers'
import { UserEntity } from 'typeorm/entities/User/User.entity'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
