import { MutableRefObject, useEffect } from 'react'

const useHandleClickOutside = <T extends HTMLElement>(
	ref: MutableRefObject<T | null>,
	action: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				action()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [action])
}

export default useHandleClickOutside
