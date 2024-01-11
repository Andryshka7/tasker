import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { AccessTokenStrategy, RefreshTokenStrategy } from 'common/strategies'
import { RefreshTokenEntity, UserEntity } from 'typeorm/entities'
import { AuthService, TokensService } from './services'
import { AuthController } from './controllers'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]), JwtModule.register({})],
	providers: [AuthService, TokensService, AccessTokenStrategy, RefreshTokenStrategy],
	controllers: [AuthController]
})
export class AuthModule {}
