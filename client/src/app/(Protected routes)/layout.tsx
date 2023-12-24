import { PropsWithChildren } from 'react'
import { Menu, Logo } from '@/app/components'
import { CreateTaskModal, CreateUserModal } from '@/app/components/Modals'

const Layout = async ({ children }: PropsWithChildren) => (
	<div className='flex'>
		<div>
			<Logo />
			<Menu />
		</div>
		<main className='w-full'>{children}</main>
		<CreateTaskModal />
		<CreateUserModal />
	</div>
)

export default Layout
