'use client'

import { useCreateTaskModal } from '@/components/Modals/hooks'
import { Modal } from '@/components/ui'

import { Form } from './components'

const CreateTaskModal = () => {
	const { visible } = useCreateTaskModal()
	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default CreateTaskModal
