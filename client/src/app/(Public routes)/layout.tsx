import { Logo } from 'app/components'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => (
	<>
		<Logo />
		<main>{children}</main>
	</>
)

export default Layout
