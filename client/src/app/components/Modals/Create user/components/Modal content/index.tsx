'use client'

import { useCreateUserModal } from '@/app/components/Modals/hooks'
import { Modal } from '@/app/components/Modals/components'
import { Form } from './components'

const ModalContent = () => {
	const { visible } = useCreateUserModal()
	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default ModalContent
