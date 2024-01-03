import { PropsWithChildren } from 'react'
import { Menu, Logo } from '@/components/ui'

const Layout = ({ children }: PropsWithChildren) => (
	<div className='flex'>
		<div>
			<Logo />
			<Menu />
		</div>
		<main className='w-full'>{children}</main>
	</div>
)

export default Layout
