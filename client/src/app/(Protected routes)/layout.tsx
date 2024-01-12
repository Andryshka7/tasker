import { PropsWithChildren } from 'react'

import { Modals } from '@/components'
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
		<Modals />
	</DataProvider>
)

export default Layout
