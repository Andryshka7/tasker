import { Request } from 'express'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { jwt_secret } from 'config'
import { type JwtPayload } from 'types'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt-access-token') {
	constructor() {
		super({
			jwtFromRequest: (req: Request) => req.cookies['accessToken'],
			secretOrKey: jwt_secret
		})
	}

	validate(payload: JwtPayload) {
		const { id, gmail } = payload
		return { id, gmail }
	}
}
