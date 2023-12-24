import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { Form } from './components'
import { headers } from 'next/headers'
import { type User } from '@/types'

const CreateTaskModal = async () => {
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

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Form />
		</HydrationBoundary>
	)
}

export default CreateTaskModal
