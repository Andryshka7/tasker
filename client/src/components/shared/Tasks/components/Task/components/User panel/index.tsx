import { MouseEvent } from 'react'

import { Avatar } from '@/components/ui'
import { useAuth, useUpdateTask } from '@/hooks'
import { Task } from '@/types'

interface Props {
	task: Task
	isHovering: boolean
}

const UserPanel = ({ task, isHovering }: Props) => {
	const { data: me } = useAuth()

	const updateTask = useUpdateTask(task.id)

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

	return (
		<div
			className={`absolute bottom-0 left-0 flex w-full items-center justify-center rounded-b bg-blue px-8 duration-200 ${hoverStyle}`}
		>
			{!task.user ? (
				<button
					className='h-6 w-24 rounded border-2 border-gray-200 text-sm font-semibold duration-200 hover:bg-gray-200 hover:text-blue'
					onClick={takeTask}
				>
					Take task
				</button>
			) : task.user?.id !== me?.id ? (
				<div className='flex items-center gap-2'>
					<Avatar src={task.user.avatar} className='h-6 w-6 rounded-full object-cover' />
					<p className='font-semibold'>
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
					className='h-6 w-16 rounded bg-green-600 text-sm font-semibold duration-200 hover:bg-opacity-90'
					onClick={completeTask}
				>
					Done
				</button>
			)}
		</div>
	)
}
export default UserPanel
