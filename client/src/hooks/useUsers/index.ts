import { type User } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useUsersQuery = () =>
	useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await fetch('http://localhost:4000/users', {
				credentials: 'include',
				cache: 'no-cache'
			})
			return response.ok ? ((await response.json()) as User[]) : []
		},
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false
	})

export default useUsersQuery
