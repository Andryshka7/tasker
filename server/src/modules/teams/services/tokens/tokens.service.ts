import { hash } from 'bcrypt'
import { jwt_secret } from 'config'
import { Repository } from 'typeorm'
import { RefreshTokenEntity } from 'typeorm/entities'
import { RefreshToken, User } from 'types'

import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TokensService {
	constructor(
		@InjectRepository(RefreshTokenEntity)
		private refreshTokensRepository: Repository<RefreshTokenEntity>,
		private jwtService: JwtService
	) {}

	async generateTokens(user: User) {
		const { id, email, role, team } = user

		const accessToken = await this.jwtService.signAsync(
			{ id, email, role, team },
			{ secret: jwt_secret, expiresIn: '1h' }
		)
		const refreshToken = await this.jwtService.signAsync(
			{ id, email, role, team },
			{ secret: jwt_secret, expiresIn: '7d' }
		)

		return { accessToken, refreshToken }
	}

	async saveRefreshToken({ token: refreshToken, user }: RefreshToken) {
		const token = await hash(refreshToken, 10)
		const created = await this.refreshTokensRepository.create({ token, user })
		await this.refreshTokensRepository.save(created)
	}
}
