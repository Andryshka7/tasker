import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

const middleware = async (request: NextRequest) => {
	const response = await fetch('http://localhost:4000/auth/me', { headers: headers() })

	if (!response.ok) {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}
}

export const config = {
	matcher: ['/', '/completed', '/edit-team', '/my-tasks', '/team']
}

export default middleware
