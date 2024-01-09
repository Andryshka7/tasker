type Role = 'admin' | 'moderator' | 'user'
type Priority = 1 | 2 | 3 | 4

interface Task {
	id: number
	title: string
	description: string
	priority: Priority
	completed: string | null
	due: string
	user: User
	creator: User
}

interface User {
	id: number
	name: string
	surname: string
	email: string
	role: Role
	password: string
	lastActive: null | string
	avatar: string | null
	tasks: Task[]
	createdTasks: Task[]
}

interface Credentials {
	email: string
	password: string
}

type UserFromRequest = Pick<User, 'id' | 'email' | 'role'>

type CreateUserPayload = Omit<User, 'id' | 'avatar' | 'tasks' | 'createdTasks' | 'lastActive'> & {
	avatar: string | null
}

type UpdateUserPayload = Omit<User, 'id' | 'avatar' | 'tasks' | 'createdTasks' | 'lastActive'> & {
	avatar: string | null
}

type CreateTaskPayload = Omit<Task, 'id' | 'creator' | 'completed'>

interface RefreshToken {
	token: string
	user: User
}

interface JwtPayload {
	id: number
	email: string
	role: string
	iat: number
	exp: number
}

export {
	type Role,
	type Priority,
	type Task,
	type User,
	type Credentials,
	type UserFromRequest,
	type RefreshToken,
	type JwtPayload,
	type CreateUserPayload,
	type UpdateUserPayload,
	type CreateTaskPayload
}
