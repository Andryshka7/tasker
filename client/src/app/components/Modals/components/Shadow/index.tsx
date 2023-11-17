'use client'

import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ onClick?: () => void }>

const Shadow = ({ children, onClick }: Props) => (
	<div
		className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70'
		onClick={onClick}
	>
		{children}
	</div>
)

export default Shadow
