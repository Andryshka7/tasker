'use client'

import { CSSProperties, ReactNode, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

type OptionType<Value> = {
	className?: string
	children?: ReactNode
	value: Value
}

type Props<Value, Option extends OptionType<Value>> = {
	options: Option[]
	handleSelect: (value: Value) => void
	height: number
	width: number
	className?: string
	buttonSize?: number
	buttonMarginRight?: number
} & Pick<CSSProperties, 'borderRadius'>

const SelectBox = <Value, Option extends OptionType<Value>>({
	options: initialOptions,
	handleSelect,
	height,
	width,
	className,
	buttonSize,
	buttonMarginRight,
	borderRadius
}: Props<Value, Option>) => {
	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState<Option[]>(initialOptions)

	const handleClick = (index: number) => {
		if (open && index) {
			setOptions((prevOptions) => {
				const newOptions = [...prevOptions]
				newOptions[index] = prevOptions[0]
				newOptions[0] = prevOptions[index]
				return newOptions
			})
			handleSelect(options[index].value)
		}

		setOpen((open) => !open)
	}

	const getOptionStyles = (index: number) => {
		const styles: CSSProperties = {
			translate: `0 ${index * height}px`
		}

		if (index === 0) {
			styles.borderTopLeftRadius = borderRadius
			styles.borderTopRightRadius = borderRadius
		}
		if (index === options.length - 1) {
			styles.borderBottomLeftRadius = borderRadius
			styles.borderBottomRightRadius = borderRadius
		}

		return styles
	}

	return (
		<div
			className={`${className} relative ${!open ? 'overflow-hidden' : ''} `}
			style={{ height, width, borderRadius }}
		>
			{options.map(({ className, children, value }, index) => (
				<div
					key={index}
					onClick={() => handleClick(index)}
					className={`${className} absolute h-full w-full cursor-pointer`}
					style={getOptionStyles(index)}
				>
					{children || String(value)}
				</div>
			))}

			<TiArrowSortedDown
				size={buttonSize || 18}
				className='pointer-events-none absolute top-1/2 duration-200'
				style={{
					right: buttonMarginRight || '10px',
					rotate: open ? '180deg' : '',
					translate: '0 -50%'
				}}
			/>
		</div>
	)
}

export default SelectBox
