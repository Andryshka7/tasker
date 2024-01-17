'use client'

import { useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

import { capitalize, roleColors, roles } from '@/helpers'
import { useAuth, useOptimistic, useUpdateUser } from '@/hooks'
import { Role } from '@/types'

type Props = {
	initialRole: Role
	userId: number
	editable?: boolean
}

const RoleSelector = ({ initialRole, editable = true, userId }: Props) => {
	const { data: me } = useAuth()

	const [open, setOpen] = useState(false)
	const [role, selectRole] = useOptimistic(
		initialRole,
		async (role) => await updateUser({ role })
	)

	const updateUser = useUpdateUser(userId as number)

	const options: Role[] = [...roles]

	if (me!.role !== 'admin') options.pop()

	options[options.indexOf(role)] = options[0]
	options[0] = role

	const handleSelect = (index: number) => {
		if (open && index) {
			selectRole(options[index])
		}
		setOpen((open) => !open)
	}

	const getOptionStyle = (index: number) => {
		const visibility = !open && index > 0 ? 'hidden' : 'visible'

		const color = roleColors[options[index]]

		let rounded = !open ? 'rounded-md' : ''
		if (open && index === 0) rounded += 'rounded-t-md'
		if (open && index === options.length - 1) rounded += 'rounded-b-md'

		return `flex w-full h-full font-semibold text-xs cursor-pointer items-center justify-center ${color} ${visibility} ${rounded}`
	}

	return editable ? (
		<div className='relative h-7 w-32'>
			{options.map((role, index) => (
				<div
					key={index}
					className={getOptionStyle(index)}
					onClick={() => handleSelect(index)}
				>
					{capitalize(role)}
				</div>
			))}
			<TiArrowSortedDown
				size={15}
				className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 duration-200 ${
					open ? 'rotate-180' : ''
				}`}
			/>
		</div>
	) : (
		<div
			className={`flex h-7 w-32 items-center justify-center rounded-md text-xs font-semibold ${roleColors[role]}`}
		>
			{capitalize(role)}
		</div>
	)
}

export default RoleSelector
