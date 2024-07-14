import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserFromRequest } from 'types'

export const GetTeam = createParamDecorator((_, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	const user = request.user as UserFromRequest
	return user.team
})
