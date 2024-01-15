import { MouseEvent } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

import {
	useConfirmationModal,
	useEditTaskModal,
	useTaskPreviewModal
} from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import { useAuth, useDeleteTask, useUpdateTask } from '@/hooks'
import { Task } from '@/types'

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

	const startEditing = (e: MouseEvent) => {
		e.stopPropagation()
		openEditTaskModal(task)
	}
	const proposeDeleting = async (e: MouseEvent) => {
		e.stopPropagation()
		openConfirmationModal({
			name: 'Delete task',
			text: `Are you certain about your decision to delete this task from the team taskboard?`,
			confirmAction: async () => {
				await deleteTask()
				close()
			}
		})
	}

	return task.completed ? (
		<div className='mt-5 flex items-center justify-center'>
			<button
				className='h-6 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:bg-opacity-90 hover:text-blue'
				onClick={unCompleteTask}
			>
				UncompleteTaskTask
			</button>
		</div>
	) : (
		<div className='mt-5 flex items-center justify-between'>
			<button
				className='h-7 w-20 cursor-pointer rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
				onClick={completeTask}
			>
				Done
			</button>

			{task.user ? (
				<div className='flex items-center gap-2'>
					<Avatar src={task.user.avatar} className='h-7 w-7 rounded-full object-cover' />
					<p className='text-lg font-semibold'>
						{task.user.name} {task.user.surname}
					</p>
				</div>
			) : (
				<button
					className='h-7 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
					onClick={takeTask}
				>
					Take task
				</button>
			)}

			<div className='flex'>
				<BiEditAlt size={26} className='cursor-pointer' onClick={startEditing} />
				<MdDeleteOutline size={26} className='cursor-pointer' onClick={proposeDeleting} />
			</div>
		</div>
	)
}
export default AdminPanel
