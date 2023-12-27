import { CreateUserButton, Users } from './components'
import { UsersWrapper } from '@/app/components/Wrappers'

const Page = async () => (
	<UsersWrapper>
		<div className='mx-10'>
			<div className='mx-auto mt-16 max-w-[1500px] lg:w-[700px] 2xl:w-full'>
				<div className='flex items-center justify-between'>
					<h1 className='text-3xl font-bold'>Edit Team</h1>
					<CreateUserButton />
				</div>
				<Users />
			</div>
		</div>
	</UsersWrapper>
)

export default Page
