'use client'

import { isToday } from '@/helpers'
import { useTasks, useUsers } from '@/hooks'

import { Count, User } from './components'

const Page = () => {
	const { data: tasks } = useTasks()
	const { data: users } = useUsers()

	const completedTasks = tasks!.filter(({ completed }) => completed)
	const completedToday = tasks!.filter(({ completed }) => completed && isToday(completed))
	const peopleActiveToday = users!.filter(({ lastActive }) => lastActive && isToday(lastActive))

	const progressFields = [
		{ image: '/world.png', title: 'Completed tasks', count: completedTasks.length },
		{ image: '/trophy.png', title: 'Completed today', count: completedToday.length },
		{ image: '/people.png', title: 'People active today', count: peopleActiveToday.length }
	]

	return (
		<div className='mx-16 mt-20'>
			<div className='flex flex-wrap justify-center gap-x-14 gap-y-6'>
				<div className='flex w-[500px] flex-col gap-2.5 lg:w-5/6 2xl:w-[45%]'>
					<h1 className='text-4xl font-bold'>Your team</h1>
					{users!.map((user) => (
						<User {...user} key={user.id} />
					))}
				</div>
				<div className='flex w-[500px] flex-col gap-2.5 lg:w-5/6 2xl:mt-36 2xl:w-[45%]'>
					<h1 className='text-4xl font-bold'>Team progress</h1>
					{progressFields.map(({ image, title, count }, index) => (
						<div
							className='flex items-center justify-between rounded bg-blue px-10 py-5'
							key={index}
						>
							<div className='flex items-center gap-4'>
								<img src={image} className='h-10 w-10' alt='' />
								<h2 className='text-2xl font-semibold'>{title}</h2>
							</div>
							<Count value={count} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Page
