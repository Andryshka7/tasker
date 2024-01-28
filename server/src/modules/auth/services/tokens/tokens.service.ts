import { compare, hash } from 'bcrypt'
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
			{ id, email, role, team }, // JwtPayload
			{ secret: jwt_secret, expiresIn: '1h' }
		)
		const refreshToken = await this.jwtService.signAsync(
			{ id, email, role, team }, // JwtPayload
			{ secret: jwt_secret, expiresIn: '7d' }
		)

		return { accessToken, refreshToken }
	}

	async updateRefreshToken(refreshToken: string, id: number) {
		const token = await hash(refreshToken, 10)
		await this.refreshTokensRepository.update({ id }, { token })
	}

	async saveRefreshToken({ token: refreshToken, user }: RefreshToken) {
		const token = await hash(refreshToken, 10)
		const created = await this.refreshTokensRepository.create({ token, user })
		await this.refreshTokensRepository.save(created)
	}

	async revokeRefreshToken(details: Partial<RefreshToken>) {
		await this.refreshTokensRepository.delete(details)
	}

	async tokenExists({ refreshToken, user }: { refreshToken?: string; user: Partial<User> }) {
		const tokenInstance = await this.refreshTokensRepository.findOneBy({
			user: { id: user.id }
		})

		if (!tokenInstance) {
			return false
		}

		if (!refreshToken) {
			return true
		} else {
			return await compare(refreshToken, tokenInstance.token)
		}
	}
}
