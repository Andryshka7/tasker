import { Module } from '@nestjs/common'
import { AuthService } from './services/auth.service'
import { AuthController } from './controllers/auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'typeorm/entities'
import { JwtModule } from '@nestjs/jwt'
import { jwt_secret } from 'config'

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.register({
            global: true,
            secret: jwt_secret,
            signOptions: { expiresIn: '24h' }
        })
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
