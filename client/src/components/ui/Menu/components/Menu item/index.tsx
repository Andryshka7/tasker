'use client'

import Link from 'next/link'
import { IconType } from 'react-icons'

type Props = {
	icon: IconType
	title: string
} & ({ action: () => void; to?: never } | { action?: never; to: string })

const MenuItem = ({ icon: ReactIcon, title, action, to }: Props) => (
	<Link
		href={to || '#'}
		className='flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 font-bold duration-200 hover:bg-cyan'
		onClick={action}
	>
		<ReactIcon size={20} />

		{title}
	</Link>
)

export default MenuItem
