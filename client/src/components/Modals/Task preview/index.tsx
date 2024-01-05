'use client'

import { Task } from './components'
import { useTaskPreviewModal } from '../hooks'
import { Modal } from '../components'

const TaskPreview = () => {
	const { visible, task } = useTaskPreviewModal()

	return (
		task && (
			<Modal visible={visible}>
				<Task {...task} />
			</Modal>
		)
	)
}
export default TaskPreview
