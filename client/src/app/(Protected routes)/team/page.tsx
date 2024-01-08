'use client'

import { useUsers } from '@/hooks'
import { User } from './components'

const Page = () => {
	const { data: users } = useUsers()

	return (
		<div className='mx-24 mt-20'>
			<h1 className='text-4xl font-bold'>Your team</h1>
			<div className='mt-3 flex w-[600px] flex-col gap-2.5'>
				{users!.map((user) => (
					<User {...user} key={user.id} />
				))}
			</div>
		</div>
	)
}

export default Page
