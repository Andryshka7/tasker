import { useState } from 'react'

const useSelectBox = <Option, Value>({
	selected,
	options: initialOptions,
	onSelect
}: {
	selected?: number
	options: (Option & { value: Value })[]
	onSelect?: (value: Value) => void
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [options, setOptions] = useState(() => {
		if (!selected) {
			return initialOptions
		}

		const options = [...initialOptions]
		options[0] = initialOptions[selected]
		options[selected] = initialOptions[0]

		return options
	})

	const select = (index: number) => {
		setIsOpen((state) => !state)

		if (isOpen) {
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
	}

	return {
		isOpen,
		options: options.slice(0, !isOpen ? 1 : undefined),
		select
	}
}

export default useSelectBox
