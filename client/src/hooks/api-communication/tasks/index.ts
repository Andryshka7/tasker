import { createTaskQuery, deleteTaskQuery, updateTaskQuery } from '@/api/tasks'
import { useTasks } from '@/hooks'
import { CreateTaskPayload, UpdateTaskPayload } from '@/types'
import toast from 'react-hot-toast'

const useCreateTask = () => {
	const { refetch } = useTasks()

	return async (taskDetails: CreateTaskPayload) => {
		const createTask = async () => {
			await createTaskQuery(taskDetails)
			await refetch()
		}

		await toast.promise(createTask(), {
			success: 'Task has been created',
			loading: 'Creating a task...',
			error: 'Could not create a task!'
		})
	}
}

const useUpdateTask = (id: number) => {
	const { refetch } = useTasks()

	return async (updateFields: UpdateTaskPayload) => {
		const completeTask = async () => {
			await updateTaskQuery(id, updateFields)
			await refetch()
		}
		await toast.promise(completeTask(), {
			success: 'Task status has been updated.',
			error: 'Could not update task status.',
			loading: 'Updating task status...'
		})
	}
}

const useDeleteTask = (id: number) => {
	const { refetch } = useTasks()

	return async () => {
		const deleteUser = async () => {
			await deleteTaskQuery(id)
			await refetch()
		}
		toast.promise(deleteUser(), {
			success: 'Task has been deleted.',
			loading: 'Deleting task...',
			error: 'Could not delete a task.'
		})
	}
}

export { useCreateTask, useDeleteTask, useUpdateTask }
