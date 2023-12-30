'use client'

import { useCreateTaskModal } from '@/app/components/Modals/hooks'
import { Modal } from '@/app/components/Modals/components'
import { Form } from './components'

const ModalContent = () => {
	const { visible } = useCreateTaskModal()
	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default ModalContent
