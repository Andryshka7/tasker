'use client'

import { useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

import { capitalize, roles } from '@/helpers'
import { useAuth, useHandleClickOuthide } from '@/hooks'
import { Role } from '@/types'

const roleColors = {
	admin: 'bg-orange-500',
	moderator: 'bg-purple-600',
	user: 'bg-green-600'
}

interface Props {
	role: Role
	editable?: boolean
	selectRole: (role: Role) => void
}

const RoleSelector = ({ role, editable = true, selectRole }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { data: me } = useAuth()

	const [isOpen, setIsOpen] = useState(false)

	const options: Role[] = [...roles]
	if (me!.role !== 'admin') options.pop()

	options[options.indexOf(role)] = options[0]
	options[0] = role

	const getOptionStyle = (index: number) => {
		const color = roleColors[options[index]]
		const visibility = !isOpen && index > 0 ? 'hidden' : 'visible'

		let rounded = !isOpen ? 'rounded-md' : ''
		if (isOpen && index === 0) rounded += 'rounded-t-md'
		if (isOpen && index === options.length - 1) rounded += 'rounded-b-md'

		return `flex w-full h-full font-semibold text-xs cursor-pointer items-center justify-center ${color} ${visibility} ${rounded}`
	}

	useHandleClickOuthide(ref, () => setIsOpen(false))

	return editable ? (
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
	) : (
		<div
			className={`mt-4 flex h-7 w-32 items-center justify-center rounded-md text-xs font-semibold ${roleColors[role]}`}
		>
			{capitalize(role)}
		</div>
	)
}

export default RoleSelector
