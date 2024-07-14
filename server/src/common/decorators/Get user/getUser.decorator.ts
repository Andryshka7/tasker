import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserFromRequest } from 'types'

export const GetUser = createParamDecorator((_, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	return request.user as UserFromRequest
})
