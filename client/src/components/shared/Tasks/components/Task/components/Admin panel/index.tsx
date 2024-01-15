import { MouseEvent } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

import { useConfirmationModal, useEditTaskModal } from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import { useAuth, useDeleteTask, useUpdateTask } from '@/hooks'
import { Task } from '@/types'

interface Props {
	task: Task
	isHovering: boolean
}

const AdminPanel = ({ task, isHovering }: Props) => {
	const { data: me } = useAuth()

	const { open: openEditTaskModal } = useEditTaskModal()
	const { open: openConfirmationModal } = useConfirmationModal()

	const updateTask = useUpdateTask(task.id)
	const deleteTask = useDeleteTask(task.id)

	const hoverStyle = !isHovering ? '-translate-y-1 opacity-0' : '-translate-y-3'

	const takeTask = (e: MouseEvent) => {
		e.stopPropagation()
		updateTask({ user: me })
	}
	const completeTask = (e: MouseEvent) => {
		e.stopPropagation()
		updateTask({ completed: new Date().toISOString() })
	}
	const unCompleteTask = (e: MouseEvent) => {
		e.stopPropagation()
		updateTask({ completed: null })
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
			confirmAction: deleteTask
		})
	}

	return task.completed ? (
		<div
			className={`absolute bottom-0 left-0 flex w-full items-center justify-center rounded-b bg-blue px-8 duration-200 ${hoverStyle}`}
		>
			<button
				className='h-6 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:bg-opacity-90 hover:text-blue'
				onClick={unCompleteTask}
			>
				Uncomplete
			</button>
		</div>
	) : (
		<div
			className={`absolute bottom-0 left-0 flex w-full items-center justify-between rounded-b bg-blue px-8 duration-200 ${hoverStyle}`}
		>
			<button
				className='h-6 w-16 rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
				onClick={completeTask}
			>
				Done
			</button>

			{task.user ? (
				<div className='flex items-center gap-2'>
					<Avatar src={task.user.avatar} className='h-6 w-6 rounded-full object-cover' />
					<p className='font-semibold'>
						{task.user.name} {task.user.surname}
					</p>
				</div>
			) : (
				<button
					className='h-6 w-24 rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
					onClick={takeTask}
				>
					Take task
				</button>
			)}
			<div className='flex w-16 justify-end'>
				<BiEditAlt size={24} onClick={startEditing} />
				<MdDeleteOutline size={24} onClick={proposeDeleting} />
			</div>
		</div>
	)
}
export default AdminPanel
