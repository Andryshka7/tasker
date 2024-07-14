import { createReportQuery } from '@/helpers/api/reports'
import { CreateReportPayload } from '@/types'
import toast from 'react-hot-toast'

const useCreateReport = () => {
	return (reportDetails: CreateReportPayload) => {
		const createReport = async () => {
			await createReportQuery(reportDetails)
		}

		toast.promise(createReport(), {
			success: 'Report has been sent',
			loading: 'Sending report...',
			error: 'Could not report this bug!'
		})
	}
}

export { useCreateReport }
