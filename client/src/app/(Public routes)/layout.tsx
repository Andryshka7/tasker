import { PropsWithChildren } from 'react'
import { Logo } from '@/components/ui'

const Layout = ({ children }: PropsWithChildren) => (
	<>
		<Logo />
		<main>{children}</main>
	</>
)

export default Layout
