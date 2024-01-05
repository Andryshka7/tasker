import { createTaskQuery, deleteTaskQuery, updateTaskQuery } from '@/api/tasks'
import { useConfirmationModal } from '@/components/Modals/hooks'
import { useTasks } from '@/hooks'
import { CreateTaskPayload, UpdateTaskPayload } from '@/types'
import toast from 'react-hot-toast'

const useCreateTask = () => {
	const { refetch } = useTasks()

	return (taskDetails: CreateTaskPayload) => {
		const createTask = async () => {
			await createTaskQuery(taskDetails)
			await refetch()
			close()
		}

		toast.promise(createTask(), {
			success: 'Task has been created',
			loading: 'Creating a task...',
			error: 'Could not create a task!'
		})
	}
}

const useUpdateTask = (id: number) => {
	const { refetch } = useTasks()

	return (updateFields: UpdateTaskPayload) => {
		const completeTask = async () => {
			await updateTaskQuery(id, updateFields)
			await refetch()
		}
		toast.promise(completeTask(), {
			success: 'Task status has been updated.',
			error: 'Could not update task status.',
			loading: 'Updating task status...'
		})
	}
}

const useDeleteTask = (id: number) => {
	const { refetch } = useTasks()
	const { open: openConfirmationModal } = useConfirmationModal()

	return () => {
		openConfirmationModal({
			name: 'Delete task',
			text: `Are you certain about your decision to delete this task from the team taskboard?`,
			confirmAction: async () => {
				const deleteUser = async () => {
					await deleteTaskQuery(id)
					await refetch()
					close()
				}
				toast.promise(deleteUser(), {
					success: 'Task has been deleted.',
					loading: 'Deleting task...',
					error: 'Could not delete a task.'
				})
			}
		})
	}
}

export { useCreateTask, useDeleteTask, useUpdateTask }

