'use client'

import { Modal } from '@/components/ui'
import { useCreateTaskModal } from '@/hooks/modals'

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
