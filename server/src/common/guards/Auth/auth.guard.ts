import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private JwtService: JwtService) {}

    async canActivate(context: ExecutionContext) {
        try {
            const request = context.switchToHttp().getRequest()
            const token = request.headers.authorization?.replace('Bearer ', '')
            const user = await this.JwtService.verifyAsync(token)
            request['user'] = user
        } catch (error) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
        }

        return true
    }
}
