'use client'

import { Modal } from '@/components/ui'
import { useReportBugModal } from '@/hooks/modals'

import { Form } from './components'

const ReportBug = () => {
	const { visible } = useReportBugModal()

	return (
		<Modal visible={visible}>
			<Form />
		</Modal>
	)
}
export default ReportBug
