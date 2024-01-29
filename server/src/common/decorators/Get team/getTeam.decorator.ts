import { UserFromRequest } from 'types'

import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const GetTeam = createParamDecorator((_, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	const user = request.user as UserFromRequest
	return user.team
})
