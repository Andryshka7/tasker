import { UserEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersController } from './controllers'
import { UsersService } from './services'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	providers: [UsersService],
	controllers: [UsersController]
})
export class UsersModule {}
