import { server } from '@/config'
import { CreateTaskPayload, Task, UpdateTaskPayload } from '@/types'

const fetchTasksQuery = async () => {
	const response = await fetch(`${server}/tasks`, {
		credentials: 'include',
		cache: 'no-cache'
	})
	return response.ok ? ((await response.json()) as Task[]) : []
}

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

const deleteTaskQuery = async (id: number) => {
	const response = await fetch(`${server}/tasks/${id}`, {
		method: 'DELETE',
		credentials: 'include'
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error deleting task!')
	}
}

export { fetchTasksQuery, createTaskQuery, updateTaskQuery, deleteTaskQuery }
