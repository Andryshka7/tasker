'use client'

import { PriorityIndicator } from '@/components/shared'
import { Priority } from '@/types'
import { Dispatch, SetStateAction } from 'react'

interface Props {
	selectedPriority: number
	selectPriority: Dispatch<SetStateAction<Priority>>
}

const priorities = [
	{ priority: 1 as Priority, name: 'Mandatory' },
	{ priority: 2 as Priority, name: 'Essential' },
	{ priority: 3 as Priority, name: 'Necessary' },
	{ priority: 4 as Priority, name: 'Trivial' }
]

const PrioritySelector = ({ selectedPriority, selectPriority }: Props) => (
	<div className='mt-6 flex items-center justify-between'>
		{priorities.map(({ priority, name }) => (
			<div
				className={`flex w-40 cursor-pointer items-center justify-center gap-2 rounded py-1.5 duration-200 ${
					selectedPriority === priority ? 'bg-teal' : 'bg-cyan hover:bg-teal'
				}`}
				onClick={() => selectPriority(priority)}
				key={priority}
			>
				<PriorityIndicator className='h-5 w-5 rounded-full' priority={priority} />
				<div className='font-semibold'>{name}</div>
			</div>
		))}
	</div>
)

export default PrioritySelector
