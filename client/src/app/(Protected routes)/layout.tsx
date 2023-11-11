import { ReactNode } from 'react'
import { Logo, Menu } from 'app/components'

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => (
	<div className='flex'>
		<div>
			<Logo />
			<Menu />
		</div>
		<main>{children}</main>
	</div>
)

export default Layout
