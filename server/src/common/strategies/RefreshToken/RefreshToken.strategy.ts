import { jwt_secret } from 'config'
import { Request } from 'express'
import { Strategy } from 'passport-jwt'

import { PassportStrategy } from '@nestjs/passport'

export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
	constructor() {
		super({
			jwtFromRequest: (req: Request) => req.cookies['refreshToken'],
			secretOrKey: jwt_secret
		})
	}

	validate(payload) {
		return payload
	}
}
