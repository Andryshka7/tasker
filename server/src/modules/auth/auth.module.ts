import { AccessTokenStrategy, RefreshTokenStrategy } from 'common/strategies'
import { RefreshTokenEntity, UserEntity } from 'typeorm/entities'

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthController } from './controllers'
import { AuthService, TokensService } from './services'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]), JwtModule.register({})],
	providers: [AuthService, TokensService, AccessTokenStrategy, RefreshTokenStrategy],
	controllers: [AuthController]
})
export class AuthModule {}
