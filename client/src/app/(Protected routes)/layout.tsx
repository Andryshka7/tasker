import { PropsWithChildren } from 'react'

import {
	ConfirmationModal,
	CreateTaskModal,
	CreateUserModal,
	EditTaskModal,
	EditUserModal,
	TaskPreview
} from '@/components/Modals'
import { DataProvider } from '@/components/Providers'
import { Logo, Menu } from '@/components/ui'

const Layout = ({ children }: PropsWithChildren) => (
	<DataProvider>
		<div className='flex'>
			<div>
				<Logo />
				<Menu />
			</div>
			<main className='w-full'>{children}</main>
		</div>
		<CreateUserModal />
		<EditUserModal />
		<TaskPreview />
		<CreateTaskModal />
		<EditTaskModal />
		<ConfirmationModal />
	</DataProvider>
)

export default Layout
