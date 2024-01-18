'use client'

import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

import { capitalize, roleColors } from '@/helpers'
import { useHandleClickOuthide } from '@/hooks'
import { Role } from '@/types'

interface Props {
	role: Role
	selectRole: Dispatch<SetStateAction<Role>>
}

const RoleSelector = ({ role, selectRole }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	const options: Role[] = ['user', 'moderator', 'admin']
	options[options.indexOf(role)] = options[0]
	options[0] = role

	const getOptionStyle = (index: number) => {
		const visibility = !isOpen && index > 0 ? 'hidden' : 'visible'

		const color = roleColors[options[index]]

		let rounded = !isOpen ? 'rounded-md' : ''
		if (isOpen && index === 0) rounded += 'rounded-t-md'
		if (isOpen && index === options.length - 1) rounded += 'rounded-b-md'

		return `flex w-full h-full font-semibold text-xs cursor-pointer items-center justify-center ${color} ${visibility} ${rounded}`
	}

	useHandleClickOuthide(ref, () => setIsOpen(false))

	return (
		<div className='relative mt-4 h-7 w-32' ref={ref}>
			{options.map((role, index) => (
				<div
					key={index}
					className={getOptionStyle(index)}
					onClick={() => {
						if (isOpen && index) selectRole(options[index])
						setIsOpen((open) => !open)
					}}
				>
					{capitalize(role)}
				</div>
			))}
			<TiArrowSortedDown
				size={15}
				className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 duration-200 ${
					isOpen ? 'rotate-180' : ''
				}`}
			/>
		</div>
	)
}

export default RoleSelector
