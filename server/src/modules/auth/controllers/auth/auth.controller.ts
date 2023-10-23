import { Response } from 'express'
import { Res, Body, Post, Controller, UseGuards, HttpException, HttpStatus } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GetRefreshToken, GetUser } from 'common/decorators'
import { SignInDto } from 'modules/auth/dtos'
import { TokensService, AuthService } from '../../services'
import { User } from 'types'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private tokensService: TokensService
    ) {}

    @Post()
    async signIn(@Res({ passthrough: true }) response: Response, @Body() credentials: SignInDto) {
        const user = await this.authService.signIn(credentials)

        const { accessToken, refreshToken } = await this.tokensService.generateTokens(user)

        const tokenExists = await this.tokensService.tokenExists({ user })
        if (tokenExists) {
            await this.tokensService.updateRefreshToken(refreshToken, user)
        } else {
            await this.tokensService.saveRefreshToken(refreshToken, user)
        }

        response.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 15,
            secure: true,
            httpOnly: true
        })
        response.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: true,
            httpOnly: true,
            path: '/auth/refresh'
        })

        return user
    }

    @Post('refresh')
    @UseGuards(AuthGuard('jwt-refresh-token'))
    async refreshTokens(@GetRefreshToken() refreshToken: string, @GetUser() user: User) {
        const tokenExists = await this.tokensService.tokenExists({ refreshToken, user })
        if (!tokenExists) {
            throw new HttpException('Refresh token malformed', HttpStatus.BAD_REQUEST)
        }
        await this.tokensService.updateRefreshToken(refreshToken, user)
    }

    @Post('logout')
    @UseGuards(AuthGuard('jwt-access-token'))
    async logout(@GetUser() user: User) {
        await this.tokensService.revokeRefreshToken({ user })
    }
}
