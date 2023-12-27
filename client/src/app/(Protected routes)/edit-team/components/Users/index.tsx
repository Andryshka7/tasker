'use client'

import { useUsers } from '@/hooks'
import { User } from './components'

const Users = () => {
	const { data: users } = useUsers()
	return (
		<div className='mt-3 grid gap-2.5 2xl:grid-cols-2'>
			{users?.map((user) => <User {...user} key={user.id} />)}
		</div>
	)
}
export default Users
