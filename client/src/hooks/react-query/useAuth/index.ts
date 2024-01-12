import { fetchAuthQuery } from '@/helpers/api/auth'
import { useQuery } from '@tanstack/react-query'

const useAuthQuery = () =>
	useQuery({
		queryKey: ['auth'],
		queryFn: fetchAuthQuery,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false
	})

export default useAuthQuery
