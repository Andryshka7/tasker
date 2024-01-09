const capitalize = (string: string) => string[0].toLocaleUpperCase() + string.slice(1)

const isToday = (date: string) => new Date(date).toDateString() === new Date().toDateString()

const swapElements = <T>(array: T[], x: number, y: number) => {
	const temporary = array[x]
	array[x] = array[y]
	array[y] = temporary
}

const formatDate = (date: string) => {
	const dateObj = new Date(date)

	const day = dateObj.getDay()
	const month = dateObj.toDateString().split(' ')[1]

	return isToday(date) ? 'Today' : `${day} ${month}`
}

export { formatDate, swapElements, isToday, capitalize }
