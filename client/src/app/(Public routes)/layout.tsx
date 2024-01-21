import { PropsWithChildren } from 'react'

import { ConfirmationModal, CreateTeamModal } from '@/components/Modals'
import { Logo } from '@/components/ui'

const Layout = ({ children }: PropsWithChildren) => (
	<main>
		<Logo />
		{children}
		<CreateTeamModal />
		<ConfirmationModal />
	</main>
)

export default Layout
