'use client'

import { BiEditAlt } from 'react-icons/bi'
import { RoleSelector } from './components'
import { Avatar } from '@/app/components/ui'
import { useUsers } from '@/hooks'

const UsersList = () => {
	const { data: users } = useUsers()

	return (
		<div className='mt-3 grid gap-2.5 2xl:grid-cols-2'>
			{users?.map((user) => (
				<div className='flex items-center justify-between rounded-md bg-blue px-8 py-5' key={user.id}>
					<div className='flex items-center gap-3.5'>
						<Avatar src={user.avatar} className='h-9 w-9 rounded-full object-cover' />
						<h3 className='-mt-0.5 text-2xl font-semibold'>
							{user.name} {user.surname}
						</h3>
					</div>
					<div className='flex w-5/12 items-center justify-between'>
						<RoleSelector role={user.role} />
						<BiEditAlt size={30} onClick={() => console.log(user)} />
					</div>
				</div>
			))}
		</div>
	)
}
export default UsersList
