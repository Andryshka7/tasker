import { Module } from '@nestjs/common'
import { AuthService } from './services/auth/auth.service'
import { TokensService } from './services/tokens/tokens.service'
import { AuthController } from './controllers/auth/auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RefreshTokenEntity, UserEntity } from 'typeorm/entities'
import { JwtModule } from '@nestjs/jwt'
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]), JwtModule.register({})],
    providers: [AuthService, TokensService, AccessTokenStrategy, RefreshTokenStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
