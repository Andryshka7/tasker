import { server } from '@/config'
import { Credentials, User } from '@/types'

const fetchAuthQuery = async () => {
	const response = await fetch(`${server}/auth`, { credentials: 'include' })
	return response.ok ? ((await response.json()) as User) : null
}

const signInQuery = async (credentials: Credentials) => {
	const response = await fetch(`${server}/auth`, {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(credentials)
	})

	if (!response.ok) throw new Error('Error while signing in!')
}

const signOutQuery = async () => {
	const response = await fetch(`${server}/auth/signout`, {
		credentials: 'include',
		method: 'POST'
	})

	if (!response.ok) throw new Error('Error while signing out!')
}

export { fetchAuthQuery, signInQuery, signOutQuery }
