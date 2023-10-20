import { CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common'
import { User } from 'types'

export class IsAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        const user = request.user as User

        if (user.role !== 'admin') {
            throw new HttpException('Only admin is able to make this kind of request', HttpStatus.FORBIDDEN)
        }

        return true
    }
}
