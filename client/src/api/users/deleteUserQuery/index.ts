import { server } from '@/config'

const deleteUserQuery = async (id: number) => {
	const response = await fetch(`${server}/users/${id}`, {
		method: 'DELETE',
		credentials: 'include'
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while deleting user!')
	}
}

export default deleteUserQuery
