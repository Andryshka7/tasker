'use client'

import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

import { RoleSelector } from './components'
import { type User as UserType } from '@/types'
import { useOptimistic, useUsers } from '@/hooks'
import { updateUserQuery } from '@/helpers'
import { useConfirmationModal, useEditUserModal } from '@/app/components/Modals/hooks'
import { Avatar } from '@/app/components'
import toast from 'react-hot-toast'

const User = (user: UserType) => {
	const { refetch } = useUsers()
	const { open: openEditUserModal } = useEditUserModal()
	const { open: openConfirmationModal } = useConfirmationModal()

	const [role, setRole] = useOptimistic(
		user.role,
		async (role) => {
			await updateUserQuery(user.id, { role })
			await refetch()
		},
		() => toast.error('Could not update user role!')
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
				<div className='flex items-center'>
					<BiEditAlt
						size={30}
						className='cursor-pointer'
						onClick={() => openEditUserModal(user)}
					/>
					<MdDeleteOutline
						size={30}
						className='cursor-pointer'
						onClick={() => {
							openConfirmationModal({
								name: 'Delete user',
								text: `Are you certain about your decision to exclude ${user.name} ${user.surname} from this team?`,
								confirmAction: () => {
									console.log(`${user.name} ${user.surname} has been deleted`)
								}
							})
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default User
