'use client'

import { Priority } from '@/types'
import { Dispatch, SetStateAction } from 'react'

type Priorities = {
	priority: Priority
	name: string
	color: string
}[]

const priorities: Priorities = [
	{ priority: 1, name: 'Mandatory', color: 'bg-red-500' },
	{ priority: 2, name: 'Essential', color: 'bg-yellow-400' },
	{ priority: 3, name: 'Necessary', color: 'bg-green-500' },
	{ priority: 4, name: 'Trivial', color: 'bg-neutral-400' }
]

interface Props {
	selectedPriority: number
	selectPriority: Dispatch<SetStateAction<Priority>>
}

const PrioritySelector = ({ selectedPriority, selectPriority }: Props) => (
	<div className='mt-6 flex items-center justify-between'>
		{priorities.map(({ priority, name, color }) => (
			<div
				className={`flex w-40 cursor-pointer items-center justify-center gap-2 rounded py-1.5 duration-200 ${
					selectedPriority === priority ? 'bg-teal' : 'bg-cyan hover:bg-teal'
				}`}
				onClick={() => selectPriority(priority)}
				key={priority}
			>
				<div className={`h-5 w-5 rounded-full ${color}`} />
				<div className='font-semibold'>{name}</div>
			</div>
		))}
	</div>
)

export default PrioritySelector
