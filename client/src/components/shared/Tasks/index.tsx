import { Task as TaskType } from '@/types'

import { Task } from './components'

interface Props {
	title?: string
	tasks: TaskType[]
}

const Tasks = ({ title, tasks }: Props) => {
	const jsxTasks = tasks.map((task, index) => <Task {...task} key={index} />)

	return tasks.length > 1 ? (
		<div className='mt-28'>
			<h1 className='mx-auto w-[500px] px-1.5 text-3xl font-bold lg:w-3/4 2xl:w-full'>
				{title || 'Tasks'}
			</h1>

			<div className='mt-3 hidden 2xl:flex'>
				<div className='w-1/2 px-1.5'>{jsxTasks.filter((_, index) => index % 2 === 0)}</div>
				<div className='w-1/2 px-1.5'>{jsxTasks.filter((_, index) => index % 2 === 1)}</div>
			</div>

			<div className='mx-auto mt-3 w-[500px] px-1.5 lg:w-3/4 2xl:hidden'>{jsxTasks}</div>
		</div>
	) : (
		<div className='mx-auto mt-28 w-[500px] lg:w-3/4'>
			<h1 className='text-3xl font-bold'>{title || 'Tasks'}</h1>
			<div className='mt-3'>{jsxTasks}</div>
		</div>
	)
}
export default Tasks
