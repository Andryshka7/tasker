'use client'

import { useCreateUserModal } from '@/components/Modals/hooks'
import { Modal } from '@/components/ui'

import { Form } from './components'

const CreateUserModal = () => {
	const { visible } = useCreateUserModal()
	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default CreateUserModal
