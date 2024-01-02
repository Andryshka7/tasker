import { type User } from '@/types'
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { headers } from 'next/headers'
import { PropsWithChildren } from 'react'

const UsersWrapper = async ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await fetch('http://localhost:4000/users', {
				headers: headers(),
				cache: 'no-cache'
			})
			return response.ok ? ((await response.json()) as User[]) : []
		}
	})

	return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
export default UsersWrapper
