'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Avatar } from '@/app/components'
import { type User } from '@/types'

interface Props {
	options: User[]
	selectUser: Dispatch<SetStateAction<User | null>>
}

const UserSelector = ({ options: initialOptions, selectUser }: Props) => {
	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState(initialOptions)

	const handleSelect = (index: number) => {
		if (open && index) {
			setOptions((prevOptions) => {
				const newOptions = [...prevOptions]
				newOptions[index] = prevOptions[0]
				newOptions[0] = prevOptions[index]
				return newOptions
			})
			selectUser(options[index])
		}
		setOpen((open) => !open)
	}

	const getOptionStyle = (index: number) => {
		const hoverEffect = index > 0 ? 'hover:bg-teal' : ''
		const visibility = !open && index > 0 ? 'hidden' : 'visible'
		return `flex cursor-pointer items-center gap-2 py-1 pl-4 ${hoverEffect} ${visibility}`
	}

	return (
		<div className='mt-4 flex'>
			<h1 className='mr-4 text-2xl font-semibold'>For:</h1>

			<div className='absolute ml-16 mt-0.5 w-52 rounded bg-cyan py-1.5'>
				<TiArrowSortedDown
					size={18}
					className={`absolute right-4 top-3 duration-200 ${open ? 'rotate-180' : ''}`}
				/>

				{options.map(({ avatar, name, surname }, index) => (
					<div key={index} className={getOptionStyle(index)} onClick={() => handleSelect(index)}>
						<Avatar src={avatar} className='h-6 w-6 rounded-full object-cover' />
						<h2 className='text-sm font-semibold'>
							{name} {surname}
						</h2>
					</div>
				))}
			</div>
		</div>
	)
}

export default UserSelector
