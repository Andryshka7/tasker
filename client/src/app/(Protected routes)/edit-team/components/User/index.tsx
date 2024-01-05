'use client'

import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { RoleSelector } from './components'
import { useAuth, useOptimistic, useUsers } from '@/hooks'
import { updateUserQuery } from '@/api/users'
import { useConfirmationModal, useEditUserModal } from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import toast from 'react-hot-toast'
import { type User as UserType } from '@/types'
import { useDeleteUser, useUpdateUser } from '@/hooks'

const User = (user: UserType) => {
	const { data: auth } = useAuth()

	const { refetch } = useUsers()
	const { open: openEditUserModal } = useEditUserModal()
	const { open: openConfirmationModal } = useConfirmationModal()

	const updateUser = useUpdateUser(user.id)

	const [role, setRole] = useOptimistic(
		user.role,
		async (role) => {
			await updateUser({ role })
			await refetch()
		},
		() => toast.error('Could not update user role!')
	)

	const deleteUser = useDeleteUser(user.id)

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
					{user.id !== auth!.id && (
						<MdDeleteOutline
							size={30}
							className='cursor-pointer'
							onClick={() => {
								openConfirmationModal({
									name: 'Delete user',
									text: `Are you certain about your decision to exclude ${user.name} ${user.surname} from this team?`,
									confirmAction: deleteUser
								})
							}}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default User
