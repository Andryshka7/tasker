import { fetchTasksQuery } from '@/helpers/api/tasks'
import { useQuery } from '@tanstack/react-query'

const useTasksQuery = () =>
	useQuery({
		queryKey: ['tasks'],
		queryFn: fetchTasksQuery,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false
	})

export default useTasksQuery
