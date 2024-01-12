'use client'

import { useEditTaskModal } from '@/components/Modals/hooks'
import { Modal } from '@/components/ui'

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
