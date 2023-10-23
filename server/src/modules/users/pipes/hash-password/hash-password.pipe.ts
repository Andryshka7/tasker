import { Injectable, PipeTransform } from '@nestjs/common'
import { CreateUserDto } from '../../dtos/CreateUser/CreateUser.dto'
import { hash } from 'bcrypt'

@Injectable()
export class HashPasswordPipe implements PipeTransform {
    async transform(user: CreateUserDto) {
        user.password = await hash(user.password, 10)
        return user
    }
}
