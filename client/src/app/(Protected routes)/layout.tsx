import { PropsWithChildren } from 'react'
import { Menu, Logo } from '@/components/ui'
import { DataProvider } from '@/components/Providers'
import { Modals } from '@/components'

const Layout = ({ children }: PropsWithChildren) => (
	<div className='flex'>
		<div>
			<Logo />
			<Menu />
		</div>
		<main className='w-full'>
			<DataProvider>
				{children}
				<Modals />
			</DataProvider>
		</main>
	</div>
)

export default Layout
