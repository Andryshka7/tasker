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
	password: string
	avatar: string
	tasks: Task[]
	createdTasks: Task[]
}

export { type Task, type User }
