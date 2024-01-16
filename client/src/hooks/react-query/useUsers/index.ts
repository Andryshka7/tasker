import { fetchUsersQuery } from '@/helpers/api/users'
import { useQuery } from '@tanstack/react-query'

const useUsersQuery = () =>
	useQuery({
		queryKey: ['users'],
		queryFn: fetchUsersQuery,
		enabled: false
	})

export default useUsersQuery
