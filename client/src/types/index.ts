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
	role: Role
	avatar: string | null
}

type Role = 'admin' | 'moderator' | 'user'

export { type Task, type User, type Role }
