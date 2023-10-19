import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'typeorm/entities'
import { JwtService } from '@nestjs/jwt'
import { User } from 'types'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
        private JwtService: JwtService
    ) {}

    async signIn({ email, password }: Pick<User, 'email' | 'password'>) {
        const user = await this.usersRepository.findOneBy({ email, password })
        if (!user || !(password === user.password)) {
            throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST)
        }
        const token = await this.JwtService.signAsync({ ...user })

        return { token }
    }
}
