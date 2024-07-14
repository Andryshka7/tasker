import { Priority } from '@/types'
import { HTMLAttributes } from 'react'

const priorityColors = {
	2: 'bg-yellow-400',
	1: 'bg-red-500',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

type Props = {
	priority: Priority
} & HTMLAttributes<HTMLDivElement>

const PriorityIndicator = ({ priority, className, ...attributes }: Props) => (
	<div {...attributes} className={`${className} ${priorityColors[priority]}`} />
)

export default PriorityIndicator
