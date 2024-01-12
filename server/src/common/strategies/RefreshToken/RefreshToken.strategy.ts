import { jwt_secret } from 'config'
import { Request } from 'express'
import { Strategy } from 'passport-jwt'
import { JwtPayload } from 'types'

import { PassportStrategy } from '@nestjs/passport'

export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
	constructor() {
		super({
			jwtFromRequest: (req: Request) => req.cookies['refreshToken'],
			secretOrKey: jwt_secret
		})
	}

	validate(payload: JwtPayload) {
		const { id, email, role } = payload
		return { id, email, role }
	}
}
