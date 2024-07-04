'use client'

import { useRef } from 'react'
import { IoClose } from 'react-icons/io5'

import { PriorityIndicator } from '@/components/shared'
import { formatDate } from '@/helpers'
import { useAuth, useHandleClickOuthide } from '@/hooks'
import { useTaskPreviewModal } from '@/hooks/modals'
import { Task as TaskType } from '@/types'

import { AdminPanel, UserPanel } from './components'

const Task = (task: TaskType) => {
	const ref = useRef<HTMLDivElement | null>(null)

	const { data: me } = useAuth()
	const { close } = useTaskPreviewModal()

	useHandleClickOuthide(ref, close)

	return (
		<div className='relative w-[800px] rounded bg-blue px-16 py-8' ref={ref}>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-4 top-3 cursor-pointer'
			/>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<PriorityIndicator className='h-5 w-5 rounded-full' priority={task.priority} />
					<h2 className='text-4xl font-semibold'>{task.title}</h2>
				</div>
				<div className='rounded bg-cyan px-4 py-0.5 font-medium'>
					{formatDate(task.due)}
				</div>
			</div>
			<hr className='my-4 h-0.5 bg-white' />
			<p className='text-lg font-semibold'>{task.description}</p>
			{me?.role !== 'user' ? <AdminPanel task={task} /> : <UserPanel task={task} />}
		</div>
	)
}
export default Task
