import { Avatar } from '@/components/ui'
import { capitalize, getRoleColor } from '@/helpers'
import { User as UserType } from '@/types'

const User = (user: UserType) => (
	<div className='flex items-center justify-between rounded-md bg-blue px-10 py-5'>
		<div className='flex items-center gap-4'>
			<Avatar src={user.avatar} className='h-10 w-10 rounded-full object-cover' />
			<h3 className='-mt-0.5 text-2xl font-semibold'>
				{user.name} {user.surname}
			</h3>
		</div>
		<div
			className={`flex h-7 w-32 items-center justify-center rounded text-xs font-semibold ${getRoleColor(
				user.role
			)}`}
		>
			{capitalize(user.role)}
		</div>
	</div>
)

export default User
