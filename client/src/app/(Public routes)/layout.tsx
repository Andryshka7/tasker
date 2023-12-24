import { PropsWithChildren } from 'react'
import { Logo } from '@/app/components'

const Layout = ({ children }: PropsWithChildren) => (
	<>
		<Logo />
		<main>{children}</main>
	</>
)

export default Layout
