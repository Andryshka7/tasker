'use client'

import { Modal } from '@/components/ui'
import { useCreateUserModal } from '@/components/Modals/hooks'
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
