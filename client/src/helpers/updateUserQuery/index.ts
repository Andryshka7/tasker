import { User } from '@/types'

const updateUserQuery = async (user: User) => {
	const response = await fetch(`http://localhost:4000/users/${user.id}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(user)
	})
	if (!response.ok) throw new Error(await response.json())
}

export default updateUserQuery
