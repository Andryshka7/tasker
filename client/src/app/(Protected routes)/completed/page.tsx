'use client'

import { Tasks } from '@/components/shared'
import { useTasks } from '@/hooks'

const Page = () => {
	const { data } = useTasks()

	const tasks = data!.filter((task) => task.completed)

	return (
		<div className='mx-10 lg:mx-12'>
			{tasks.length ? (
				<Tasks tasks={tasks} title='Completed tasks' />
			) : (
				<div className='mt-16 flex items-center justify-center'>
					<h1 className='text-xl font-semibold'>
						There is no completed tasks since this project started.
					</h1>
				</div>
			)}
		</div>
	)
}

export default Page
