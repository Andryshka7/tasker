'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { type Role } from '@/types'

interface Props {
	selectRole: Dispatch<SetStateAction<Role>>
}

const RoleSelector = ({ selectRole }: Props) => {
	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState<Role[]>(['user', 'moderator', 'admin'])

	const handleSelect = (index: number) => {
		if (open && index) {
			setOptions((prevOptions) => {
				const newOptions = [...prevOptions]
				newOptions[index] = prevOptions[0]
				newOptions[0] = prevOptions[index]
				return newOptions
			})
			selectRole(options[index])
		}
		setOpen((open) => !open)
	}

	const getOptionStyle = (index: number) => {
		const visibility = !open && index > 0 ? 'hidden' : 'visible'

		const colors = {
			admin: 'bg-orange-500',
			moderator: 'bg-purple-600',
			user: 'bg-green-500'
		}
		const color = colors[options[index]]

		let rounded = !open ? 'rounded' : ''
		if (open && index === 0) rounded += 'rounded-t'
		if (open && index === options.length - 1) rounded += 'rounded-b'

		return `flex w-full h-full font-semibold cursor-pointer items-center justify-center ${color} ${visibility} ${rounded}`
	}

	return (
		<div className='absolute h-7 w-32 rounded'>
			{options.map((role, index) => (
				<div key={index} className={getOptionStyle(index)} onClick={() => handleSelect(index)}>
					{role}
				</div>
			))}
			<TiArrowSortedDown
				size={20}
				className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 duration-200 ${
					open ? 'rotate-180' : ''
				}`}
			/>
		</div>
	)
}

export default RoleSelector
