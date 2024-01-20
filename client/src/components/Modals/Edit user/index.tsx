'use client'

import { Modal } from '@/components/ui'
import { useEditUserModal } from '@/hooks/modals'

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
