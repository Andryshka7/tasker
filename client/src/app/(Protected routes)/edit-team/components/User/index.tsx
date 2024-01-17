'use client'

import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

import { useConfirmationModal, useEditUserModal } from '@/components/Modals/hooks'
import { Avatar } from '@/components/ui'
import { roles } from '@/helpers'
import { useAuth, useDeleteUser } from '@/hooks'
import { User as UserType } from '@/types'

import { RoleSelector } from './components'

const User = (user: UserType) => {
	const { data: me } = useAuth()

	const { open: openEditUserModal } = useEditUserModal()
	const { open: openConfirmationModal } = useConfirmationModal()

	const deleteUser = useDeleteUser(user.id)

	const allowEditRole =
		me!.role !== 'user' &&
		user.id !== me?.id &&
		roles.indexOf(me!.role) >= roles.indexOf(user.role)

	return (
		<div className='flex items-center justify-between rounded-md bg-blue px-8 py-5'>
			<div className='flex items-center gap-3.5'>
				<Avatar src={user.avatar} className='h-10 w-10 rounded-full object-cover' />
				<h3 className='-mt-0.5 text-2xl font-semibold'>
					{user.name} {user.surname}
				</h3>
			</div>
			<div className='flex w-5/12 items-center justify-between'>
				<RoleSelector
					initialRole={user.role}
					editable={allowEditRole}
					userId={user.id}
					key={user.role}
				/>
				<div className='flex items-center'>
					<BiEditAlt
						size={30}
						className='cursor-pointer'
						onClick={() => openEditUserModal(user)}
					/>
					{user.id !== me!.id && (
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
