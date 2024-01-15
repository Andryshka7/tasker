'use client'

import { IoClose } from 'react-icons/io5'

import { useTaskPreviewModal } from '@/components/Modals/hooks'
import { formatDate, priorityColors } from '@/helpers'
import { useAuth } from '@/hooks'
import { Task as TaskType } from '@/types'

import { AdminPanel, UserPanel } from './components'

const Task = (task: TaskType) => {
	const { data: me } = useAuth()
	const { close } = useTaskPreviewModal()
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
					<div className={`h-6 w-6 rounded-full ${priorityColors[task.priority]}`} />
					<h2 className='text-4xl font-semibold'>{task.title}</h2>
				</div>
				<div className='rounded bg-cyan px-4 py-0.5 font-medium'>
					{formatDate(task.due)}
				</div>
			</div>
			<hr className='my-4 h-0.5 bg-white' />
			<p className='text-lg font-semibold'>{task.description}</p>
			{me!.role !== 'user' ? <AdminPanel task={task} /> : <UserPanel task={task} />}
		</div>
	)
}
export default Task
