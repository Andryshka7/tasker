import toast from 'react-hot-toast'

import { createTeamQuery } from '@/helpers/api/team'
import { useRefetchQueries } from '@/hooks'
import { CreateTeamPayload } from '@/types'

const useCreateTeam = () => {
	const refetchQueries = useRefetchQueries()

	return async (teamDetails: CreateTeamPayload) => {
		const createTask = async () => {
			await createTeamQuery(teamDetails)
			await refetchQueries()
		}

		await toast.promise(createTask(), {
			success: 'Team has been created',
			loading: 'Creating a team...',
			error: 'Could not create a team!'
		})
	}
}

export { useCreateTeam }
