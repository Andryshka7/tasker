interface Task {
	id: number
	title: string
	description: string
	priority: number
	due: Date
	user: User
	creator: User
}

interface User {
	id: number
	name: string
	surname: string
	email: string
	role: string
	avatar: string | null
}

export { type Task, type User }
