'use client'

import { useUsers } from '@/hooks'
import { useCreateUserModal } from '@/hooks/modals'
import { BiMessageSquareAdd } from 'react-icons/bi'

import { User } from './components'

const Page = () => {
	const { data: users } = useUsers()
	const { open } = useCreateUserModal()

	if (!users) return null

	const usersJsx = users.map((user) => <User {...user} key={user.id} />)

	return (
		<div className='mx-12'>
			<div
				className={`mx-auto mt-16 max-w-[1500px] lg:w-[670px] ${
					1 > 1 ? '2xl:w-full' : '2xl:w-3/4'
				}`}
			>
				<div className='flex items-center justify-between px-1.5'>
					<h1 className='text-3xl font-bold'>Edit Team</h1>
					<button
						className='flex items-center gap-1 rounded bg-green-600 px-5 py-1.5 font-semibold'
						onClick={open}
					>
						<BiMessageSquareAdd size={24} />
						<h3 className='font-semibold'>Create user</h3>
					</button>
				</div>
				<div className={`mt-3 grid gap-3 ${1 > 1 ? '2xl:grid-cols-2' : ''}`}>
					{usersJsx}
				</div>
			</div>
		</div>
	)
}

export default Page
