'use client'

import { Dispatch, SetStateAction } from 'react'
import { Avatar } from '@/app/components/ui'
import { useSelectBox } from '@/hooks'
import { type User } from '@/types'

import { TiArrowSortedDown } from 'react-icons/ti'

interface Props {
	usersList: User[]
	selectUser: Dispatch<SetStateAction<User | null>>
}

const UserSelector = ({ usersList, selectUser }: Props) => {
	const { isOpen, options, select } = useSelectBox({
		options: [
			{ image: null, title: 'Everyone', value: null },
			...usersList.map((user) => ({
				image: user.avatar,
				title: `${user.name} ${user.surname}`,
				value: user
			}))
		],
		onSelect: (user) => selectUser(user)
	})

	return (
		<div className='mt-4 flex'>
			<h1 className='mr-4 text-2xl font-semibold'>For:</h1>

			<div className='absolute ml-16 mt-0.5 w-48 rounded bg-cyan py-1.5'>
				<TiArrowSortedDown
					size={20}
					className={`absolute right-4 top-3 duration-200 ${isOpen ? 'rotate-180' : ''}`}
				/>

				{options.map(({ image, title }, index) => (
					<div
						key={index}
						className={`flex cursor-pointer items-center gap-2 py-1 pl-4 ${
							index > 0 ? 'hover:bg-teal' : ''
						}`}
						onClick={() => select(index)}
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
