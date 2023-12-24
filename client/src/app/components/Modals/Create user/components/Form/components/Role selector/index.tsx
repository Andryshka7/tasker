'use client'

import { useSelectBox } from '@/hooks'
import { Dispatch, SetStateAction } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

interface Props {
	role: string
}

const roles = [
	{ color: 'bg-green-600', value: 'user' },
	{ color: 'bg-orange-500', value: 'admin' },
	{ color: 'bg-purple-600', value: 'moderator' }
]

interface Props {
	role: string
	setRole: Dispatch<SetStateAction<string>>
}

const RoleSelector = ({ setRole }: Props) => {
	const { isOpen, options, select } = useSelectBox({
		options: roles,
		onSelect: (role) => {
			setRole(role)
		}
	})

	return (
		<div className='relative mt-5 h-7 w-32'>
			<TiArrowSortedDown
				size={18}
				className={`pointer-events-none absolute right-2.5 top-1.5 duration-200 ${
					isOpen ? 'rotate-180' : ''
				}`}
			/>

			{options.map(({ value, color }, index) => (
				<div
					key={index}
					className={`flex h-full w-full cursor-pointer items-center justify-center gap-2 py-1 ${color} ${
						index === 0 && 'rounded-t-md'
					} ${index === options.length - 1 && 'rounded-b-md'}`}
					onClick={() => select(index)}
				>
					<h2 className='text-sm font-semibold'>{value}</h2>
				</div>
			))}
		</div>
	)
}

export default RoleSelector
