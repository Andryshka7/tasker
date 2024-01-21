import { MutableRefObject, useEffect } from 'react'

const useHandleClickOutside = <T extends HTMLElement>(
	ref: MutableRefObject<T | null>,
	action: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				const handleMouseClick = () => {
					action()
					window.removeEventListener('mouseup', handleMouseClick)
				}
				window.addEventListener('mouseup', handleMouseClick)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [action])
}

export default useHandleClickOutside
