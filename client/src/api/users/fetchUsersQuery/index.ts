import { server } from '@/config'
import { type User } from '@/types'

const fetchUsersQuery = async () => {
	const response = await fetch(`${server}/users`, {
		credentials: 'include',
		cache: 'no-cache'
	})
	return response.ok ? ((await response.json()) as User[]) : []
}

export default fetchUsersQuery
