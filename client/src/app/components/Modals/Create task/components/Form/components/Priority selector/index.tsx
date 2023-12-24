'use client'

import { Dispatch, SetStateAction } from 'react'

interface Props {
	priority: number
	setPriority: Dispatch<SetStateAction<number>>
}

const priorities = [
	{ id: 1, name: 'Mandatory', color: 'bg-red-500' },
	{ id: 2, name: 'Essential', color: 'bg-yellow-400' },
	{ id: 3, name: 'Necessary', color: 'bg-green-500' },
	{ id: 4, name: 'Trivial', color: 'bg-neutral-400' }
]

const PrioritySelector = ({ priority, setPriority }: Props) => (
	<div className='mt-6 flex items-center justify-between'>
		{priorities.map(({ id, name, color }) => (
			<div
				className={`flex w-40 cursor-pointer items-center justify-center gap-2 rounded py-1.5 duration-200 ${
					id === priority ? 'bg-teal' : 'bg-cyan hover:bg-teal'
				}`}
				onClick={() => setPriority(id)}
				key={id}
			>
				<div className={`h-5 w-5 rounded-full ${color}`} />
				<div className='font-semibold'>{name}</div>
			</div>
		))}
	</div>
)

export default PrioritySelector
