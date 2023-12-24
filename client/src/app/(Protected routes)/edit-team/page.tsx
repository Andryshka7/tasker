import { headers } from 'next/headers'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { CreateUserButton, UsersList } from './components'
import { type User } from '@/types'

const Page = async () => {
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
			<div className='mx-10'>
				<div className='mx-auto mt-16 max-w-[1500px] lg:w-[700px] 2xl:w-full'>
					<div className='flex items-center justify-between'>
						<h1 className='text-3xl font-bold'>Edit Team</h1>
						<CreateUserButton />
					</div>
					<UsersList />
				</div>
			</div>
		</HydrationBoundary>
	)
}
export default Page
