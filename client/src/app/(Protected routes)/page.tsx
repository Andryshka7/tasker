'use client'

import { useTasks } from '@/hooks'

const HomePage = () => {
	const { data: tasks } = useTasks()

	return <div>{JSON.stringify(tasks, null, 4)}</div>
}

export default HomePage
