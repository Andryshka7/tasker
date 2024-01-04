'use client'

import { useTasks } from '@/hooks'
import { Task } from './components'

const CompletedTasks = () => {
	const { data: tasks } = useTasks()

	const tasksJsx = tasks!
		.filter((task) => task.completed)
		.map((task, index) => <Task {...task} key={index} />)

	return (
		<div className='mx-10 lg:mx-12'>
			<div className='relative mt-28 flex flex-wrap justify-center'>
				<div className='flex w-[500px] flex-col px-1.5 lg:w-3/4 2xl:w-1/2'>
					<h1 className='absolute -translate-y-12 text-3xl font-bold'>Completed tasks</h1>
					{tasksJsx.filter((_, index) => index % 2 === 0)}
				</div>

				<div className='flex w-[500px] flex-col px-1.5 pb-3 lg:w-3/4 2xl:w-1/2'>
					{tasksJsx.filter((_, index) => index % 2 === 1)}
				</div>

				{!tasksJsx.length && (
					<h3 className='text-lg font-semibold'>
						There is no completed tasks since the project started.
					</h3>
				)}
			</div>
		</div>
	)
}

export default CompletedTasks
