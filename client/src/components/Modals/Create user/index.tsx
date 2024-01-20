'use client'

import { Modal } from '@/components/ui'
import { useCreateUserModal } from '@/hooks/modals'

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
