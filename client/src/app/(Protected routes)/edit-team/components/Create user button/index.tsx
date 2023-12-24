'use client'

import { BiMessageSquareAdd } from 'react-icons/bi'
import { useCreateUserModal } from '@/app/components/Modals/hooks'

const CreateUserButton = () => {
	const { open } = useCreateUserModal()

	return (
		<button
			className='flex items-center gap-1 rounded bg-green-600 px-4 py-1 font-semibold'
			onClick={open}
		>
			<BiMessageSquareAdd size={24} />
			<h3 className='font-semibold'>Create user</h3>
		</button>
	)
}
export default CreateUserButton
