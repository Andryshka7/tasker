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

interface RefreshToken {
	token: string
	user: User
}

interface JwtPayload {
	id: number
	gmail: string
	iat: number
	exp: number
}

export { type Task, type User, type RefreshToken, type JwtPayload }
