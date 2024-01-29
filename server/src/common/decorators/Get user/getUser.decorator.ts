import { UserFromRequest } from 'types'

import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const GetUser = createParamDecorator((_, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	return request.user as UserFromRequest
})
