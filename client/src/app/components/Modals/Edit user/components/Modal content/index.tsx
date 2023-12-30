'use client'

import { useEditUserModal } from '@/app/components/Modals/hooks'
import { Modal } from '@/app/components/Modals/components'
import { Form } from './components'

const ModalContent = () => {
	const { user, visible } = useEditUserModal()

	return (
		user && (
			<Modal visible={visible}>
				<Form {...user} />
			</Modal>
		)
	)
}
export default ModalContent
