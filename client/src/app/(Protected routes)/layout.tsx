import { PropsWithChildren } from 'react'

import {
	CreateTaskModal,
	CreateUserModal,
	EditTaskModal,
	EditUserModal,
	ReportBugModal,
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
		<CreateTaskModal />
		<EditTaskModal />
		<TaskPreview />
		<ReportBugModal />
	</DataProvider>
)

export default Layout
