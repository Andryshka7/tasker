import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { compare, hash } from 'bcrypt'
import { jwt_secret } from 'config'
import { Repository } from 'typeorm'
import { RefreshTokenEntity, UserEntity } from 'typeorm/entities'
import { type UserFromRequest, type RefreshToken, type User } from 'types'

@Injectable()
export class TokensService {
	constructor(
		@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
		@InjectRepository(RefreshTokenEntity) private refreshTokensRepository: Repository<RefreshTokenEntity>,
		private jwtService: JwtService
	) {}

	async generateTokens(user: User) {
		const { id, email, role } = user

		const accessToken = await this.jwtService.signAsync(
			{ id, email, role },
			{ secret: jwt_secret, expiresIn: '1h' }
		)
		const refreshToken = await this.jwtService.signAsync(
			{ id, email, role },
			{ secret: jwt_secret, expiresIn: '7d' }
		)

		return { accessToken, refreshToken }
	}

	async updateRefreshToken(refreshToken: string, user: UserFromRequest) {
		const token = await hash(refreshToken, 10)
		await this.refreshTokensRepository.update({ user }, { token, user })
	}

	async saveRefreshToken(refreshToken: string, user: User) {
		const token = await hash(refreshToken, 10)
		const created = await this.refreshTokensRepository.create({ token, user })
		await this.refreshTokensRepository.save(created)
	}

	async revokeRefreshToken(details: Partial<RefreshToken>) {
		await this.refreshTokensRepository.delete(details)
	}

	async tokenExists({ refreshToken, user }: { refreshToken?: string; user: UserFromRequest }) {
		const tokenInstance = await this.refreshTokensRepository.findOneBy({ user })

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
