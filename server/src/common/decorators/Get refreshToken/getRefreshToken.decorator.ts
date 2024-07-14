import { ExecutionContext, createParamDecorator } from '@nestjs/common'

export const GetRefreshToken = createParamDecorator((_, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	return request.cookies['refreshToken']
})
