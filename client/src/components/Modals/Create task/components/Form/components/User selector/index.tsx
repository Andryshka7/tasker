'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Avatar } from '@/components/ui'
import { useCalculateOptions } from './hooks'
import { type User } from '@/types'

interface Props {
	user: User | null
	selectUser: Dispatch<SetStateAction<User | null>>
}

const UserSelector = ({ user, selectUser }: Props) => {
	const options = useCalculateOptions(user)
	const [open, setOpen] = useState(false)

	const getOptionStyle = (index: number) => {
		const hoverEffect = index > 0 ? 'hover:bg-teal' : ''
		const visibility = !open && index > 0 ? 'hidden' : 'visible'
		return `flex cursor-pointer items-center gap-2 py-1 pl-4 ${hoverEffect} ${visibility}`
	}

	return (
		<div className='mt-4 flex'>
			<h1 className='mr-4 text-2xl font-semibold'>For:</h1>

			<div className='absolute ml-16 mt-0.5 w-56 rounded bg-cyan py-1.5'>
				<TiArrowSortedDown
					size={18}
					className={`absolute right-4 top-3 duration-200 ${open ? 'rotate-180' : ''}`}
				/>

				{options.map(({ image, title, value }, index) => (
					<div
						key={index}
						className={getOptionStyle(index)}
						onClick={() => {
							if (index > 0) {
								selectUser(value)
							}
							setOpen((open) => !open)
						}}
					>
						<Avatar src={image} className='h-6 w-6 rounded-full object-cover' />
						<h2 className='text-sm font-semibold'>{title}</h2>
					</div>
				))}
			</div>
		</div>
	)
}

export default UserSelector
