import { Avatar } from '@/components/ui'
import { capitalize } from '@/helpers'
import { User as UserType } from '@/types'

const roleColors = {
	admin: 'bg-orange-500',
	moderator: 'bg-purple-600',
	user: 'bg-green-600'
}

const User = (user: UserType) => (
	<div className='flex items-center justify-between rounded-md bg-blue px-10 py-5'>
		<div className='flex items-center gap-4'>
			<Avatar src={user.avatar} className='h-10 w-10 rounded-full object-cover' />
			<h3 className='-mt-0.5 text-2xl font-semibold'>
				{user.name} {user.surname}
			</h3>
		</div>
		<div
			className={`flex h-7 w-32 items-center justify-center rounded text-xs font-semibold ${
				roleColors[user.role]
			}`}
		>
			{capitalize(user.role)}
		</div>
	</div>
)

export default User
