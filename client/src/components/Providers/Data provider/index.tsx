import { headers } from 'next/headers'
import { PropsWithChildren } from 'react'

import { server } from '@/config'
import { Task, User } from '@/types'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

const DataProvider = async ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()

	const prefetchPromises = [
		queryClient.prefetchQuery({
			queryKey: ['auth'],
			queryFn: async () => {
				const response = await fetch(`${server}/auth`, {
					headers: headers(),
					cache: 'no-cache'
				})
				return response.ok ? ((await response.json()) as User) : []
			}
		}),
		queryClient.prefetchQuery({
			queryKey: ['users'],
			queryFn: async () => {
				const response = await fetch(`${server}/users`, {
					headers: headers(),
					cache: 'no-cache'
				})
				return response.ok ? ((await response.json()) as User[]) : []
			}
		}),
		queryClient.prefetchQuery({
			queryKey: ['tasks'],
			queryFn: async () => {
				const response = await fetch(`${server}/tasks`, {
					headers: headers(),
					cache: 'no-cache'
				})
				return response.ok ? ((await response.json()) as Task[]) : []
			}
		})
	]

	await Promise.all(prefetchPromises)

	return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
export default DataProvider
