import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

const middleware = async (request: NextRequest) => {
	const { pathname } = request.nextUrl

	const response = await fetch('http://localhost:4000/auth/me', { headers: headers() })

	if (!response.ok && pathname !== '/sign-in') {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}

	if (response.ok && pathname === '/sign-in') {
		return NextResponse.redirect(new URL('/', request.url))
	}
}

export const config = {
	matcher: ['/', '/sign-in', '/completed', '/edit-team', '/my-tasks', '/team']
}

export default middleware
