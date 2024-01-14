const roleColors = {
	admin: 'bg-orange-500',
	moderator: 'bg-purple-600',
	user: 'bg-green-600'
}

const priorityColors = {
	1: 'bg-red-500',
	2: 'bg-yellow-400',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

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

export { roleColors, priorityColors, formatDate, swapElements, isToday, capitalize }
