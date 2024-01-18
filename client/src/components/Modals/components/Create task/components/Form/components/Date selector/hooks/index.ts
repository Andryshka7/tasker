import { useState } from 'react'

const useDateSelector = (initialDate: string) => {
	const [date, setDate] = useState(initialDate)
	const [monthDifference, setMonthDifference] = useState(0)

	const selectedDate = new Date(date)

	const year = selectedDate.getFullYear() + Math.floor(monthDifference / 12)
	const month = (((selectedDate.getMonth() + monthDifference) % 12) + 12) % 12

	const firstDayDate = new Date(year, month)
	const daysToBeAdded = firstDayDate.getDay() - 1

	const options = []

	for (let i = 0; i < 42; i++) {
		const date = new Date(year, month, -daysToBeAdded + i + 1)

		options.push({
			day: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear(),
			dateString: date.toISOString()
		})
	}

	const selectDate = (date: string) => {
		setDate(date)
		setMonthDifference(0)
	}

	return {
		date,
		selectedMonth: month,
		selectedYear: year,
		options,
		selectDate,
		selectNextMonth: () => setMonthDifference((difference) => difference + 1),
		selectPreviousMonth: () => setMonthDifference((difference) => difference - 1)
	}
}

export { useDateSelector }
