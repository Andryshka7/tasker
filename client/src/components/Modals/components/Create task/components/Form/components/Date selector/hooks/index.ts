import { useState } from 'react'

const useDateSelector = (selectedDateString: string) => {
	const [monthDifference, setMonthDifference] = useState(0)

	const selectedDate = new Date(selectedDateString)

	const year = selectedDate.getFullYear() + Math.floor(monthDifference / 12)
	const month = (((selectedDate.getMonth() + monthDifference) % 12) + 12) % 12

	const date = new Date(year, month + 1, 0)
	const daysInMonth = date.getDate()

	const daysToBeAdded = 42 - daysInMonth

	const options = []

	for (let i = 0; i < 42; i++) {
		const date = new Date(year, month, -Math.floor(daysToBeAdded / 2) + i)

		options.push({
			day: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear(),
			dateString: date.toISOString()
		})
	}

	return {
		month,
		year,
		options,
		selectNextMonth: () => setMonthDifference((difference) => difference + 1),
		selectPreviousMonth: () => setMonthDifference((difference) => difference - 1)
	}
}

export { useDateSelector }
