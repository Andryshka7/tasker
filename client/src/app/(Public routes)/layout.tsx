import { CreateTeamModal } from '@/components/Modals'
import { Logo } from '@/components/ui'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => (
	<main>
		<Logo />
		{children}
		<CreateTeamModal />
	</main>
)

export default Layout
