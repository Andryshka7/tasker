'use client'

import { capitalize, roles } from '@/helpers'
import { useAuth, useHandleClickOuthide, useOptimistic, useUpdateUser } from '@/hooks'
import { Role } from '@/types'
import { useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

type Props = {
	initialRole: Role
	userId: number
	editable?: boolean
}

const getRoleColor = (role: Role) =>
	role === 'admin' ? 'bg-orange-500' : role === 'moderator' ? 'bg-purple-600' : 'bg-green-600'

const RoleSelector = ({ initialRole, editable = true, userId }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { data: me } = useAuth()

	const [isOpen, setIsOpen] = useState(false)
	const [role, selectRole] = useOptimistic(
		initialRole,
		async (role) => await updateUser({ role })
	)

	const updateUser = useUpdateUser(userId as number)

	const options: Role[] = [...roles]

	if (me?.role !== 'admin') options.pop()

	options[options.indexOf(role)] = options[0]
	options[0] = role

	const getOptionStyle = (index: number) => {
		const roleColors = {
			admin: 'bg-orange-500',
			moderator: 'bg-purple-600',
			user: 'bg-green-600'
		}

		const color = roleColors[options[index]]
		const visibility = !isOpen && index > 0 ? 'hidden' : 'visible'

		let rounded = !isOpen ? 'rounded-md' : ''
		if (isOpen && index === 0) rounded += 'rounded-t-md'
		if (isOpen && index === options.length - 1) rounded += 'rounded-b-md'

		return `flex w-full h-full font-semibold text-xs cursor-pointer items-center justify-center ${color} ${visibility} ${rounded}`
	}

	useHandleClickOuthide(ref, () => setIsOpen(false))

	return editable ? (
		<div className='relative h-7 w-32' ref={ref}>
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
			className={`flex h-7 w-32 items-center justify-center rounded-md text-xs font-semibold ${getRoleColor(
				role
			)}`}
		>
			{capitalize(role)}
		</div>
	)
}

export default RoleSelector
