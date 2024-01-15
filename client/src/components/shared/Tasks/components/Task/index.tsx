'use client'

import { useState } from 'react'

import { useTaskPreviewModal } from '@/components/Modals/hooks'
import { formatDate, priorityColors } from '@/helpers'
import { useAuth } from '@/hooks'
import { Task as TaskType } from '@/types'

import { AdminPanel, UserPanel } from './components'

const Task = (task: TaskType) => {
	const [isHovering, setIsHovering] = useState(false)

	const { data: me } = useAuth()
	const { open: openTaskPreviewModal } = useTaskPreviewModal()

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
					<div className={`h-5 w-5 rounded-full ${priorityColors[task.priority]}`} />
					<h2 className='text-3xl font-semibold'>{task.title}</h2>
				</div>
				<div className='ml-9 mt-1 flex items-center'>
					<p className='line-clamp-2'>{task.description}</p>
				</div>
			</div>

			{me!.role === 'user' ? (
				<UserPanel task={task} isHovering={isHovering} />
			) : (
				<AdminPanel task={task} isHovering={isHovering} />
			)}
		</div>
	)
}
export default Task
