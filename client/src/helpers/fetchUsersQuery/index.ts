import { User } from '@/types'

const fetchUsersQuery = async () => {
	const response = await fetch('http://localhost:4000/users', {
		credentials: 'include',
		cache: 'no-cache'
	})
	return response.ok ? ((await response.json()) as User[]) : []
}

export default fetchUsersQuery
