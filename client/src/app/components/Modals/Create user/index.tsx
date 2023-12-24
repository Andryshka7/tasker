import { User } from '@/types'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { headers } from 'next/headers'
import { Form } from './components'

const CreateUserModal = async () => {
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

export default CreateUserModal
