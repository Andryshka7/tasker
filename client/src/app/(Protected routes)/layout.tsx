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
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => (
	<DataProvider>
		<div className='flex'>
			<div className='min-w-64'>
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
