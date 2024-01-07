'use client'

import { useConfirmationModal, useEditUserModal } from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import { useAuth, useDeleteUser } from '@/hooks'
import { type User as UserType } from '@/types'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { RoleSelector } from './components'

const User = (user: UserType) => {
	const { data: auth } = useAuth()

	const { open: openEditUserModal } = useEditUserModal()
	const { open: openConfirmationModal } = useConfirmationModal()

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
				<RoleSelector initialRole={user.role} userId={user.id} key={user.role} />
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
