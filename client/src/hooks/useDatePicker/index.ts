import { useState } from 'react'

const useDatePicker = (initialDate: string) => {
	const [date, setDate] = useState(initialDate)
	const [monthDifference, setMonthDifference] = useState(0)

	const selectedDate = new Date(date)

	const year = selectedDate.getFullYear()
	const month = selectedDate.getMonth()

	const firstDayDate = new Date(year, month + monthDifference)
	const daysToBeAdded = (firstDayDate.getDay() + 6) % 7

	const options = []

	for (let i = 0; i < 42; i++) {
		const date = new Date(year, month + monthDifference, -daysToBeAdded + i + 1)

		options.push({
			day: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear(),
			dateString: date.toISOString()
		})
	}

	const selectedMonth = firstDayDate.getMonth()
	const selectedYear = firstDayDate.getFullYear()

	const selectNextMonth = () => setMonthDifference((difference) => difference + 1)
	const selectPreviousMonth = () => setMonthDifference((difference) => difference - 1)

	const selectDate = (date: string) => {
		setDate(date)
		setMonthDifference(0)
	}

	return {
		date,
		selectedMonth,
		selectedYear,
		options,
		selectDate,
		selectNextMonth,
		selectPreviousMonth
	}
}

export default useDatePicker
