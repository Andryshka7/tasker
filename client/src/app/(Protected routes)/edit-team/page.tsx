'use client'

import { BiMessageSquareAdd } from 'react-icons/bi'
import { useCreateUserModal } from '@/components/Modals/hooks'
import { User } from './components'
import { useUsers } from '@/hooks'

const Page = () => {
	const { data: users } = useUsers()
	const { open } = useCreateUserModal()

	return (
		<div className='mx-10'>
			<div className='mx-auto mt-16 max-w-[1500px] lg:w-[700px] 2xl:w-full'>
				<div className='flex items-center justify-between'>
					<h1 className='text-3xl font-bold'>Edit Team</h1>
					<button
						className='flex items-center gap-1 rounded bg-green-600 px-5 py-1.5 font-semibold'
						onClick={open}
					>
						<BiMessageSquareAdd size={24} />
						<h3 className='font-semibold'>Create user</h3>
					</button>
				</div>
				<div className='mt-3 grid gap-2.5 2xl:grid-cols-2'>
					{users!.map((user) => (
						<User {...user} key={user.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Page
