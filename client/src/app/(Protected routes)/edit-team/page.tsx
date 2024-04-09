'use client'

import { BiMessageSquareAdd } from 'react-icons/bi'

import { useUsers } from '@/hooks'
import { useCreateUserModal } from '@/hooks/modals'

import { User } from './components'

const Page = () => {
	const { data: users } = useUsers()
	const { open } = useCreateUserModal()

	const usersJsx = users!.map((user) => <User {...user} key={user.id} />)

	return users!.length > 1 ? (
		<div className='mx-12'>
			<div className='mx-auto mt-16 max-w-[1500px] lg:w-[670px] 2xl:w-full'>
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
				<div className='mt-3 hidden 2xl:flex'>
					<div className='w-1/2 px-1.5'>
						{usersJsx.filter((_, index) => index % 2 === 0)}
					</div>
					<div className='w-1/2 px-1.5'>
						{usersJsx.filter((_, index) => index % 2 === 1)}
					</div>
				</div>
				<div className='mt-3 flex flex-col gap-3 2xl:hidden'>{usersJsx}</div>
			</div>
		</div>
	) : (
		<div className='mx-12'>
			<div className='mx-auto mt-16 max-w-[1500px] lg:w-[670px] xl:w-4/5'>
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
				<div className='mt-3 flex flex-col gap-3'>{usersJsx}</div>
			</div>
		</div>
	)
}

export default Page
