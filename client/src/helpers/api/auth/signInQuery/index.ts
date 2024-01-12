import { server } from '@/config'
import { Credentials } from '@/types'

const signInQuery = async (credentials: Credentials) => {
	const response = await fetch(`${server}/auth`, {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(credentials)
	})

	if (!response.ok) throw new Error('Error while signing in!')
}

export default signInQuery
