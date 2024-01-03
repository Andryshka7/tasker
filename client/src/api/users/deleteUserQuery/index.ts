import { server } from '@/config'

const deleteUserQuery = async (id: number) => {
	const response = await fetch(`${server}/users/${id}`, {
		method: 'DELETE',
		credentials: 'include'
	})

	if (!response.ok) throw new Error('Error while signing in!')
}

export default deleteUserQuery
