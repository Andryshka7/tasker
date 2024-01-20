'use client'

import { Modal } from '@/components/ui'
import { useEditTaskModal } from '@/hooks/modals'

import { Form } from './components'

const EditTaskModal = () => {
	const { value: task, visible } = useEditTaskModal()

	return (
		task && (
			<Modal visible={visible}>
				<Form {...task} />
			</Modal>
		)
	)
}
export default EditTaskModal
