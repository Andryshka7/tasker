import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { SignInDto } from 'modules/auth/dtos'
import { AuthService } from 'modules/auth/services/auth.service'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    @UsePipes(new ValidationPipe())
    async signIn(@Body() credentials: SignInDto) {
        return this.authService.signIn(credentials)
    }
}
