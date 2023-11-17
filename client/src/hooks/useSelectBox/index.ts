import { useState } from 'react'

const useSelectBox = <Option, Value>({
	options: initialOptions,
	onSelect
}: {
	options: (Option & { value: Value })[]
	onSelect?: (value: Value) => void
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [options, setOptions] = useState(initialOptions)

	const select = (index: number) => {
		setIsOpen((state) => !state)
		setOptions((state) => {
			const options = [...state]
			options[0] = state[index]
			options[index] = state[0]
			return options
		})

		if (onSelect) {
			onSelect(options[index].value)
		}
	}

	return {
		isOpen,
		options: options.slice(0, !isOpen ? 1 : undefined),
		select
	}
}

export default useSelectBox
