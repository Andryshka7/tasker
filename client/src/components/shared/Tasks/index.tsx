import { type Task as TaskType } from '@/types'
import { Task } from './components'

interface Props {
	title?: string
	tasks: TaskType[]
}

const Tasks = ({ title, tasks }: Props) => {
	const jsxTasks = tasks.map((task, index) => <Task {...task} key={index} />)

	return tasks.length > 1 ? (
		<div className='mt-28'>
			<div className='hidden flex-wrap justify-center 2xl:flex'>
				<div className='w-[500px] px-1.5 lg:w-3/4 2xl:w-1/2'>
					<h1 className='absolute -translate-y-12 text-3xl font-bold'>
						{title || 'Tasks'}
					</h1>
					{jsxTasks.filter((_, index) => index % 2 === 0)}
				</div>
				<div className='flex w-[500px] flex-col px-1.5 pb-3 lg:w-3/4 2xl:w-1/2'>
					{jsxTasks.filter((_, index) => index % 2 === 1)}
				</div>
			</div>

			<div className='flex flex-wrap justify-center 2xl:hidden'>
				<div className='w-[500px] px-1.5 lg:w-3/4'>
					<h1 className='absolute -translate-y-12 text-3xl font-bold'>
						{title || 'Tasks'}
					</h1>
					{jsxTasks}
				</div>
			</div>
		</div>
	) : (
		<div className='mx-auto mt-28 w-[500px] lg:w-3/4'>
			<h1 className='absolute -translate-y-12 text-3xl font-bold'>{title || 'Tasks'}</h1>
			{jsxTasks}
		</div>
	)
}
export default Tasks
