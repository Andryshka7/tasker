'use client'

import { useState } from 'react'
import { Avatar } from '@/components/ui'
import { useTaskPreviewModal } from '@/components/Modals/hooks'
import { formatDate } from '@/helpers'
import { useAuth } from '@/hooks'
import { useDeleteTask, useUpdateTask } from '@/hooks'
import { type Task as TaskType } from '@/types'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

const priorityColor = {
	1: 'bg-red-500',
	2: 'bg-yellow-400',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

const Task = (task: TaskType) => {
	const { data: me } = useAuth()

	const { open: openTaskPreviewModal } = useTaskPreviewModal()
	const [isHovering, setIsHovering] = useState(false)

	const updateTask = useUpdateTask(task.id)
	const deleteTask = useDeleteTask(task.id)

	return (
		<div
			className={`relative mb-3 w-full cursor-pointer rounded bg-blue px-8 py-4 duration-200 ${
				isHovering ? 'pb-12' : ''
			}`}
			onClick={() => openTaskPreviewModal(task)}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div className='absolute right-4 top-3 rounded bg-cyan px-4 py-0.5 font-medium'>
				{formatDate(task.due)}
			</div>

			<div className='flex h-[88px] flex-col justify-center'>
				<div className='flex items-center gap-3'>
					<div className={`h-5 w-5 rounded-full ${priorityColor[task.priority]}`} />
					<h2 className='text-3xl font-semibold'>{task.title}</h2>
				</div>
				<div className='ml-9 mt-1 flex items-center'>
					<p className='line-clamp-2'>{task.description}</p>
				</div>
			</div>

			<div
				className={`absolute bottom-0 left-0 flex w-full items-center justify-between rounded-b bg-blue px-8 duration-200 ${
					!isHovering ? '-translate-y-1 opacity-0' : '-translate-y-3'
				}`}
			>
				<button
					className='h-6 w-16 rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
					onClick={(e) => {
						e.stopPropagation()
						updateTask({ completed: true })
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
						className='h-6 w-24 rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
						onClick={(e) => {
							e.stopPropagation()
							updateTask({ user: me })
						}}
					>
						Take task
					</button>
				)}
				<div className='flex'>
					<BiEditAlt
						size={24}
						onClick={(e: MouseEvent) => {
							e.stopPropagation()
						}}
					/>
					<button>
						<MdDeleteOutline
							size={24}
							onClick={(e: MouseEvent) => {
								e.stopPropagation()
								deleteTask()
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
export default Task
