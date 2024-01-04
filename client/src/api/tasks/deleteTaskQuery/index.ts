import { server } from '@/config'

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

export default deleteTaskQuery
