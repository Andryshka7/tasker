'use client'

import { useTaskPreviewModal } from '@/components/Modals/hooks'
import { Modal } from '@/components/ui'

import { Task } from './components'

const TaskPreview = () => {
	const { value: task, visible } = useTaskPreviewModal()

	return (
		task && (
			<Modal visible={visible}>
				<Task {...task} />
			</Modal>
		)
	)
}
export default TaskPreview
