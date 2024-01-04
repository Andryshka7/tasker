'use client'

import { updateTaskQuery } from '@/api/tasks'
import { Avatar } from '@/components/ui'
import { formatDate } from '@/helpers'
import { useTasks } from '@/hooks'
import { type Task as TaskType } from '@/types'
import { useState } from 'react'
import toast from 'react-hot-toast'

const priorityColor = {
	1: 'bg-red-500',
	2: 'bg-yellow-400',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

const Task = (task: TaskType) => {
	const { refetch } = useTasks()
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
				className={`absolute bottom-0 left-0 flex w-full items-center justify-center rounded-b bg-blue px-8 duration-200 ${
					!isHovering ? '-translate-y-1 opacity-0' : '-translate-y-3'
				}`}
			>
				<button
					className='h-6 w-28 cursor-pointer rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:bg-opacity-90 hover:text-blue'
					onClick={() => {
						const unCompleteTask = async () => {
							await updateTaskQuery(task.id, { completed: false })
							await refetch()
						}
						toast.promise(unCompleteTask(), {
							success: 'Task status has been updated.',
							error: 'Could not update task status.',
							loading: 'Updating task status...'
						})
					}}
				>
					Uncomplete
				</button>
			</div>
		</div>
	)
}
export default Task
