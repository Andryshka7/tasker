import { server } from '@/config'
import { type User } from '@/types'

const fetchAuthQuery = async () => {
	const response = await fetch(`${server}/auth`, { credentials: 'include' })

	return response.ok ? ((await response.json()) as User) : null
}
export default fetchAuthQuery
