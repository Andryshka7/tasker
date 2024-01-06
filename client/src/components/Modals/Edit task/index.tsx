'use client'

import { Modal } from '../components'
import { useEditTaskModal } from '../hooks'
import { Form } from './components'

const EditTaskModal = () => {
	const { task, visible } = useEditTaskModal()
	return (
		task && (
			<Modal visible={visible}>
				<Form {...task} />
			</Modal>
		)
	)
}
export default EditTaskModal
