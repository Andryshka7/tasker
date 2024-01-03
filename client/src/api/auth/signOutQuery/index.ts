import { server } from '@/config'

const signOutQuery = async () => {
	const response = await fetch(`${server}/auth/signout`, {
		credentials: 'include',
		method: 'POST'
	})

	if (!response.ok) throw new Error('Error while signing out!')
}

export default signOutQuery
