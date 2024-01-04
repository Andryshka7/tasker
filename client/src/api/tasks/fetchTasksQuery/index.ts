import { server } from '@/config'
import { type Task } from '@/types'

const fetchTasksQuery = async () => {
	const response = await fetch(`${server}/tasks`, {
		credentials: 'include',
		cache: 'no-cache'
	})
	return response.ok ? ((await response.json()) as Task[]) : []
}

export default fetchTasksQuery
