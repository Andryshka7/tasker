'use client'

import { PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = PropsWithChildren & {
	visible: boolean
}

const Modal = ({ children, visible }: Props) => {
	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden'
			return () => {
				document.body.style.overflow = 'unset'
			}
		}
	}, [visible])

	return (
		visible &&
		createPortal(
			<div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70'>
				{children}
			</div>,
			document.getElementById('portal')!
		)
	)
}

export default Modal
