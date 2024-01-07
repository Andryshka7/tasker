'use client'

import { useEditUserModal } from '@/components/Modals/hooks'
import { Modal } from '@/components/ui'
import { Form } from './components'

const EditUserModal = () => {
	const { value: user, visible } = useEditUserModal()

	return (
		user && (
			<Modal visible={visible}>
				<Form {...user} />
			</Modal>
		)
	)
}
export default EditUserModal
