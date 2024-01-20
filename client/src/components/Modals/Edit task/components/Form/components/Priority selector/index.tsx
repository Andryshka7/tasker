'use client'

import { Dispatch, SetStateAction } from 'react'

import { getPriorityColor, priorities } from '@/helpers'
import { Priority } from '@/types'

interface Props {
	selectedPriority: number
	selectPriority: Dispatch<SetStateAction<Priority>>
}

const PrioritySelector = ({ selectedPriority, selectPriority }: Props) => (
	<div className='mt-6 flex items-center justify-between'>
		{priorities.map(({ priority, name }) => (
			<div
				className={`flex w-40 cursor-pointer items-center justify-center gap-2 rounded py-1.5 duration-200 ${
					selectedPriority === priority ? 'bg-teal' : 'bg-cyan hover:bg-teal'
				}`}
				onClick={() => selectPriority(priority as Priority)}
				key={priority}
			>
				<div className={`h-5 w-5 rounded-full ${getPriorityColor(priority as Priority)}`} />
				<div className='font-semibold'>{name}</div>
			</div>
		))}
	</div>
)

export default PrioritySelector
