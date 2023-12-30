import { PropsWithChildren } from 'react'
import { Menu, Logo } from '@/app/components'
import { CreateTaskModal, CreateUserModal, EditUserModal } from '@/app/components/Modals'

const Layout = ({ children }: PropsWithChildren) => (
	<div className='flex'>
		<div>
			<Logo />
			<Menu />
		</div>
		<main className='w-full'>{children}</main>
		<CreateTaskModal />
		<CreateUserModal />
		<EditUserModal />
	</div>
)

export default Layout
