import { server } from '@/config'
import { UpdateTaskPayload } from '@/types'

const updateTaskQuery = async (id: number, updateFields: UpdateTaskPayload) => {
	const response = await fetch(`${server}/tasks/${id}`, {
		method: 'PATCH',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updateFields)
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while updating task!')
	}
}

export default updateTaskQuery
