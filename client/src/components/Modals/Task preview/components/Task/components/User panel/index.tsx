import { Avatar } from '@/components/ui'
import { useAuth, useDeleteTask, useUpdateTask } from '@/hooks'
import { useConfirmationModal, useEditTaskModal, useTaskPreviewModal } from '@/hooks/modals'
import { Task } from '@/types'
import { MouseEvent } from 'react'

interface Props {
	task: Task
}

const AdminPanel = ({ task }: Props) => {
	const { data: me } = useAuth()

	const { open: openEditTaskModal } = useEditTaskModal()
	const { open: openConfirmationModal } = useConfirmationModal()
	const { close } = useTaskPreviewModal()

	const updateTask = useUpdateTask(task.id)
	const deleteTask = useDeleteTask(task.id)

	const takeTask = async (e: MouseEvent) => {
		e.stopPropagation()
		await updateTask({ user: me })
		close()
	}
	const unCompleteTask = async (e: MouseEvent) => {
		e.stopPropagation()
		await updateTask({ completed: null })
		close()
	}
	const completeTask = async (e: MouseEvent) => {
		e.stopPropagation()
		await updateTask({ completed: new Date().toISOString() })
		close()
	}

	return (
		<div className='mt-5 flex items-center justify-center'>
			{!task.user ? (
				<button
					className='h-7 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
					onClick={takeTask}
				>
					Take task
				</button>
			) : task.user?.id !== me?.id ? (
				<div className='flex items-center gap-2'>
					<Avatar src={task.user.avatar} className='h-7 w-7 rounded-full object-cover' />
					<p className='text-lg font-semibold'>
						{task.user.name} {task.user.surname}
					</p>
				</div>
			) : task.completed ? (
				<button
					className='h-6 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:bg-opacity-90 hover:text-blue'
					onClick={unCompleteTask}
				>
					Uncomplete
				</button>
			) : (
				<button
					className='h-7 w-20 cursor-pointer rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
					onClick={completeTask}
				>
					Done
				</button>
			)}
		</div>
	)
}
export default AdminPanel
