import { fetchUsersQuery } from '@/api'
import { useQuery } from '@tanstack/react-query'

const useUsersQuery = () =>
	useQuery({
		queryKey: ['users'],
		queryFn: fetchUsersQuery,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false
	})

export default useUsersQuery
