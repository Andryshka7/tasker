import { jwt_secret } from 'config'
import { Request } from 'express'
import { Strategy } from 'passport-jwt'

import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt-access-token') {
	constructor() {
		super({
			jwtFromRequest: (req: Request) => req.cookies['accessToken'],
			secretOrKey: jwt_secret
		})
	}

	validate(payload) {
		console.log(payload)
		return payload
	}
}
