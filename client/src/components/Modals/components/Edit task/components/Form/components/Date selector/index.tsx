import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'

import { formatDate, isTheSameDay, monthNames } from '@/helpers'
import { useDatePicker, useHandleClickOuthide } from '@/hooks'

interface Props {
	selectedDate: string
	setSelectedDate: Dispatch<SetStateAction<string>>
}

const DatePicker = ({ selectedDate, setSelectedDate }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null)

	const [isOpen, setIsOpen] = useState(false)

	const {
		date,
		selectedMonth,
		selectedYear,
		options,
		selectDate,
		selectNextMonth,
		selectPreviousMonth
	} = useDatePicker(selectedDate)

	useHandleClickOuthide(ref, () => setIsOpen(false))

	return (
		<div className='flex items-center gap-2'>
			<h1 className='mr-4 text-2xl font-semibold'>Due:</h1>
			<div className='relative mt-1' ref={ref}>
				<div
					className='flex h-8 w-24 cursor-pointer items-center justify-center rounded bg-cyan'
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<h3 className='mr-3 text-sm font-semibold'>{formatDate(selectedDate)}</h3>
					<TiArrowSortedDown
						size={17}
						className={`absolute right-3 top-1/2 -translate-y-1/2 duration-200 ${
							isOpen ? 'rotate-180' : ''
						}`}
					/>
				</div>
				{isOpen && (
					<div className='absolute left-0 top-9 w-56 rounded bg-cyan px-4 pb-2 pt-3.5'>
						<div className='flex w-full items-center justify-between'>
							<FaAngleLeft
								className='cursor-pointer'
								size={20}
								onClick={selectPreviousMonth}
							/>
							<h2 className='font-semibold'>
								{monthNames[selectedMonth]} {selectedYear}
							</h2>
							<FaAngleRight
								className='cursor-pointer'
								size={20}
								onClick={selectNextMonth}
							/>
						</div>
						<hr className='mt-3 rounded border bg-white' />
						<div className='mt-3 grid grid-cols-7 text-sm font-semibold text-gray-300'>
							{['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
								<p className='m-auto' key={day}>
									{day}
								</p>
							))}
						</div>
						<div className='mt-1.5 grid grid-cols-7 gap-y-0.5'>
							{options.map(({ day, month, dateString }) => (
								<div
									className={`m-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-bold ${
										month !== selectedMonth ? 'text-gray-400' : ''
									} ${
										isTheSameDay(date, dateString) ? 'bg-teal' : 'hover:bg-teal'
									}`}
									onClick={() => selectDate(dateString)}
									key={dateString}
								>
									{day}
								</div>
							))}
						</div>
						<button
							className='ml-auto mt-1 block h-6 w-20 rounded bg-green-600 text-sm font-semibold'
							onClick={() => {
								setIsOpen(false)
								setSelectedDate(date)
							}}
						>
							Done
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
export default DatePicker
