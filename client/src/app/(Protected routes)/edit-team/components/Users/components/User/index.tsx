'use client'

import { BiEditAlt } from 'react-icons/bi'
import { Avatar } from '@/app/components'
import { RoleSelector } from './components'
import { type User as UserType, type Role } from '@/types'
import { useOptimistic } from '@/hooks'
import { updateUserQuery } from '@/helpers'

const User = (user: UserType) => {
	const [role, setRole] = useOptimistic(
		user.role,
		async (role) => await updateUserQuery({ ...user, role })
	)

	return (
		<div className='flex items-center justify-between rounded-md bg-blue px-8 py-5'>
			<div className='flex items-center gap-3.5'>
				<Avatar src={user.avatar} className='h-10 w-10 rounded-full object-cover' />
				<h3 className='-mt-0.5 text-2xl font-semibold'>
					{user.name} {user.surname}
				</h3>
			</div>
			<div className='flex w-5/12 items-center justify-between'>
				<RoleSelector role={role} selectRole={setRole} />
				<BiEditAlt size={30} onClick={() => console.log(user)} />
			</div>
		</div>
	)
}

export default User
