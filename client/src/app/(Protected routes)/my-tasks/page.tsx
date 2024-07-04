'use client'

import { Tasks } from '@/components/shared'
import { useAuth, useTasks } from '@/hooks'

const Page = () => {
	const { data: me } = useAuth()
	const { data } = useTasks()

	if (!data) return null

	const tasks = data.filter(({ user, completed }) => !completed && user?.id === me?.id)

	return (
		<div className='mx-10 lg:mx-12'>
			{tasks.length ? (
				<Tasks tasks={tasks} title='Your tasks' />
			) : (
				<div className='mt-16 flex items-center justify-center'>
					<h1 className='text-xl'>There are no tasks assigned to you.</h1>
				</div>
			)}
		</div>
	)
}

export default Page
