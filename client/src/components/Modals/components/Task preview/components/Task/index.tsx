'use client'

import {
	useConfirmationModal,
	useEditTaskModal,
	useTaskPreviewModal
} from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import { formatDate } from '@/helpers'
import { useAuth } from '@/hooks'
import { useDeleteTask, useUpdateTask } from '@/hooks'
import { type Task as TaskType } from '@/types'
import { BiEditAlt } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'

const priorityColor = {
	1: 'bg-red-500',
	2: 'bg-yellow-400',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

const Task = (task: TaskType) => {
	const { data: me } = useAuth()

	const { open: openEditTaskModal } = useEditTaskModal()
	const { open: openConfirmationModal } = useConfirmationModal()
	const { close } = useTaskPreviewModal()

	const updateTask = useUpdateTask(task.id)
	const deleteTask = useDeleteTask(task.id)

	return (
		<div className='relative w-[700px] rounded bg-blue px-16 py-8'>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-4 top-3 cursor-pointer'
			/>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<div className={`h-6 w-6 rounded-full ${priorityColor[task.priority]}`} />
					<h2 className='text-4xl font-semibold'>{task.title}</h2>
				</div>
				<div className='rounded bg-cyan px-4 py-0.5 font-medium'>
					{formatDate(task.due)}
				</div>
			</div>
			<hr className='my-4 h-0.5 bg-white' />
			<p className='text-lg font-semibold'>{task.description}</p>
			{task.completed ? (
				<div className='mt-5 flex items-center justify-center'>
					<button
						className='h-6 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:bg-opacity-90 hover:text-blue'
						onClick={async () => {
							await updateTask({ completed: null })
							close()
						}}
					>
						Uncomplete
					</button>
				</div>
			) : (
				<div className='mt-5 flex items-center justify-between'>
					<button
						className='h-7 w-20 cursor-pointer rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
						onClick={async () => {
							await updateTask({ completed: new Date().toISOString() })
							close()
						}}
					>
						Done
					</button>

					{task.user ? (
						<div className='flex items-center gap-2'>
							<Avatar
								src={task.user.avatar}
								className='h-7 w-7 rounded-full object-cover'
							/>
							<p className='text-lg font-semibold'>
								{task.user.name} {task.user.surname}
							</p>
						</div>
					) : (
						<button
							className='h-7 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
							onClick={async () => {
								await updateTask({ user: me })
								close()
							}}
						>
							Take task
						</button>
					)}

					<div className='flex'>
						<BiEditAlt
							size={26}
							className='cursor-pointer'
							onClick={() => openEditTaskModal(task)}
						/>
						<MdDeleteOutline
							size={26}
							className='cursor-pointer'
							onClick={() =>
								openConfirmationModal({
									name: 'Delete task',
									text: `Are you certain about your decision to delete this task from the team taskboard?`,
									confirmAction: async () => {
										await deleteTask()
										close()
									}
								})
							}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
export default Task
