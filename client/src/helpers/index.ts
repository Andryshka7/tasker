import { Role } from '@/types'

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

const roles: Role[] = ['user', 'moderator', 'admin']

const roleColors = {
	admin: 'bg-orange-500',
	moderator: 'bg-purple-600',
	user: 'bg-green-600'
}

const priorities = [
	{ priority: 1, name: 'Mandatory', color: 'bg-red-500' },
	{ priority: 2, name: 'Essential', color: 'bg-yellow-400' },
	{ priority: 3, name: 'Necessary', color: 'bg-green-500' },
	{ priority: 4, name: 'Trivial', color: 'bg-neutral-400' }
]

const priorityColors = {
	1: 'bg-red-500',
	2: 'bg-yellow-400',
	3: 'bg-green-500',
	4: 'bg-neutral-400'
}

const capitalize = (string: string) => string[0].toLocaleUpperCase() + string.slice(1)

const isToday = (date: string) => new Date(date).toDateString() === new Date().toDateString()

const isTheSameDay = (date1: string, date2: string) =>
	new Date(date1).toDateString() === new Date(date2).toDateString()

const swapElements = <T>(array: T[], x: number, y: number) => {
	const temporary = array[x]
	array[x] = array[y]
	array[y] = temporary
}

const formatDate = (date: string) => {
	const dateObj = new Date(date)

	const day = dateObj.getDate()
	const month = dateObj.toDateString().split(' ')[1]

	return isToday(date) ? 'Today' : `${day} ${month}`
}

export {
	monthNames,
	roles,
	priorities,
	roleColors,
	priorityColors,
	isToday,
	formatDate,
	isTheSameDay,
	swapElements,
	capitalize
}
