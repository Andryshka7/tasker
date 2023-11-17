import { PropsWithChildren } from 'react'
import { Menu } from 'app/components'
import { Logo } from 'app/components/ui'
import Modals from 'app/components/Modals'

const Layout = ({ children }: PropsWithChildren) => (
	<div className='flex'>
		<div>
			<Logo />
			<Menu />
		</div>
		<main>{children}</main>
		<Modals />
	</div>
)

export default Layout
