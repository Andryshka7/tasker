import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { User } from './types'

const middleware = async (request: NextRequest) => {
	const { pathname } = request.nextUrl

	const response = await fetch('http://localhost:4000/auth', { headers: headers() })

	if (!response.ok && pathname !== '/sign-in') {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}

	if (response.ok) {
		const user = (await response.json()) as User

		if (pathname === '/sign-in') {
			return NextResponse.redirect(new URL('/', request.url))
		}
		if (pathname === '/edit-team' && user.role === 'user') {
			return NextResponse.redirect(new URL('/', request.url))
		}
	}
}

export const config = {
	matcher: ['/', '/sign-in', '/completed', '/edit-team', '/my-tasks', '/team']
}

export default middleware
