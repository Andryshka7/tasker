import { PropsWithChildren } from 'react'

import { CreateTeamModal } from '@/components/Modals'
import { Logo } from '@/components/ui'

const Layout = ({ children }: PropsWithChildren) => (
	<main>
		<Logo />
		{children}
		<CreateTeamModal />
	</main>
)

export default Layout
