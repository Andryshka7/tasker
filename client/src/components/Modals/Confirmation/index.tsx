'use client'

import { Modal } from '@/components/ui'
import { useConfirmationModal } from '@/hooks/modals'

import { Form } from './components'

const ConfirmationModal = () => {
	const { visible } = useConfirmationModal()

	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default ConfirmationModal
