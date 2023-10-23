import { UsersService } from 'modules/users/services/users/users.service'
import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common'

@Injectable()
export class EmailIsUnique implements CanActivate {
    constructor(private usersService: UsersService) {}
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        const email = request.body.email
        if (email && (await this.usersService.findByEmail(email))) {
            throw new HttpException('User with that email already exists!', HttpStatus.BAD_REQUEST)
        }
        return true
    }
}
