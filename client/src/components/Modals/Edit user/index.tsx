'use client'

import { useEditUserModal } from '@/components/Modals/hooks'
import { Modal } from '@/components/Modals/components'
import { Form } from './components'

const EditUserModal = () => {
	const { user, visible } = useEditUserModal()

	return (
		user && (
			<Modal visible={visible}>
				<Form {...user} />
			</Modal>
		)
	)
}
export default EditUserModal
