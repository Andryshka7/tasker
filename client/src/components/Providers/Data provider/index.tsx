import { PropsWithChildren } from 'react'
import { headers } from 'next/headers'
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { server } from '@/config'
import { type Task, type User } from '@/types'

const DataProvider = async ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['auth'],
		queryFn: async () => {
			const response = await fetch(`${server}/auth`, {
				headers: headers(),
				cache: 'no-cache'
			})
			return response.ok ? ((await response.json()) as Task[]) : []
		}
	})

	await queryClient.prefetchQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await fetch(`${server}/users`, {
				headers: headers(),
				cache: 'no-cache'
			})
			return response.ok ? ((await response.json()) as User[]) : []
		}
	})

	await queryClient.prefetchQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const response = await fetch(`${server}/tasks`, {
				headers: headers(),
				cache: 'no-cache'
			})
			return response.ok ? ((await response.json()) as Task[]) : []
		}
	})

	return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
export default DataProvider
