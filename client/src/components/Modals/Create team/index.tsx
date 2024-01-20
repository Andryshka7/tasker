'use client'

import { Modal } from '@/components/ui'
import { useCreateTeamModal } from '@/hooks/modals'

import { Form } from './components'

const CreateTeam = () => {
	const { visible } = useCreateTeamModal()
	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default CreateTeam
