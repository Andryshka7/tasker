import { server } from '@/config'
import { type CreateTaskPayload } from '@/types'

const createTaskQuery = async (taskDetails: CreateTaskPayload) => {
	const response = await fetch(`${server}/tasks`, {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(taskDetails)
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while creating task')
	}
}

export default createTaskQuery
