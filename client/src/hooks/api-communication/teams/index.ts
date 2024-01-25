import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { createTeamQuery } from '@/helpers/api/team'
import { useRefetchQueries } from '@/hooks'
import { CreateTeamPayload } from '@/types'

const useCreateTeam = () => {
	const router = useRouter()
	const refetchQueries = useRefetchQueries()

	return async (teamDetails: CreateTeamPayload) => {
		const createTask = async () => {
			await createTeamQuery(teamDetails)
			await refetchQueries()
			router.refresh()
			router.push('/')
		}

		await toast.promise(createTask(), {
			success: 'Team has been created',
			loading: 'Creating a team...',
			error: 'Could not create a team!'
		})
	}
}

export { useCreateTeam }
