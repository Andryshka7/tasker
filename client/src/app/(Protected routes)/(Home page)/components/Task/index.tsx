'use client'

import { updateTaskQuery } from '@/api/tasks'
import deleteTaskQuery from '@/api/tasks/deleteTaskQuery'
import { useConfirmationModal } from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import { formatDate } from '@/helpers'
import { useAuth, useTasks } from '@/hooks'
import { type Task as TaskType } from '@/types'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

const priorityColor = {
	1: 'bg-red-500',
	2: 'bg-yellow-400',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

const Task = (task: TaskType) => {
	const { refetch } = useTasks()
	const { data: me } = useAuth()

	const { open: openConfirmationModal } = useConfirmationModal()
	const [isHovering, setIsHovering] = useState(false)

	return (
		<div
			className={`relative mb-3 w-full rounded bg-blue px-8 py-4 duration-200 ${
				isHovering ? 'pb-12' : ''
			}`}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div className='absolute right-4 top-3 rounded bg-cyan px-4 py-0.5 font-medium'>
				{formatDate(task.due)}
			</div>

			<div className='flex items-center gap-3'>
				<div className={`h-5 w-5 rounded-full ${priorityColor[task.priority]}`} />
				<h2 className='text-3xl font-semibold'>{task.title}</h2>
			</div>
			<p className='ml-9 mt-1 line-clamp-2'>{task.description}</p>

			<div
				className={`absolute bottom-0 left-0 flex w-full items-center justify-between rounded-b bg-blue px-8 duration-200 ${
					!isHovering ? '-translate-y-1 opacity-0' : '-translate-y-3'
				}`}
			>
				<button
					className='h-6 w-16 cursor-pointer rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
					onClick={() => {
						const completeTask = async () => {
							await updateTaskQuery(task.id, { completed: true })
							await refetch()
						}
						toast.promise(completeTask(), {
							success: 'Task status has been updated.',
							error: 'Could not update task status.',
							loading: 'Updating task status...'
						})
					}}
				>
					Done
				</button>
				{task.user ? (
					<div className='flex items-center gap-2'>
						<Avatar
							src={task.user.avatar}
							className='h-6 w-6 rounded-full object-cover'
						/>
						<p className='font-semibold'>
							{task.user.name} {task.user.surname}
						</p>
					</div>
				) : (
					<button
						className='h-6 w-24 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
						onClick={() => {
							const takeTask = async () => {
								await updateTaskQuery(task.id, { user: me })
								await refetch()
							}
							toast.promise(takeTask(), {
								success: 'Task status has been updated.',
								error: 'Could not update task status.',
								loading: 'Updating task status...'
							})
						}}
					>
						Take task
					</button>
				)}
				<div className='flex'>
					<BiEditAlt
						size={24}
						className='cursor-pointer'
						onClick={() => console.log('Edit task')}
					/>
					<button>
						<MdDeleteOutline
							size={24}
							className='cursor-pointer'
							onClick={() => {
								setIsHovering(true)
								openConfirmationModal({
									name: 'Delete task',
									text: `Are you certain about your decision to delete this task from the team taskboard?`,
									confirmAction: async () => {
										const deleteUser = async () => {
											await deleteTaskQuery(task.id)
											await refetch()
										}
										toast.promise(deleteUser(), {
											success: 'Task has been deleted.',
											loading: 'Deleting task...',
											error: 'Could not delete a task.'
										})
									}
								})
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
export default Task
