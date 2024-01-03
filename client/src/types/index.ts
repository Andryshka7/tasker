interface Task {
	id: number
	title: string
	description: string
	priority: number
	due: Date
	user: User | null
	creator: User
}

type CreateTaskPayload = Omit<Task, 'id'>

type UpdateTaskPayload = Omit<Task, 'id'>

type Role = 'admin' | 'moderator' | 'user'

interface User {
	id: number
	name: string
	surname: string
	email: string
	role: Role
	avatar: string | null
}

interface Credentials {
	email: string
	password: string
}

type CreateUserPayload = Omit<User, 'avatar' | 'id'> & {
	avatar: File | null
	password: string
}
type UpdateUserPayload = Partial<Omit<User, 'id' | 'avatar'>> & {
	avatar?: File | null
	removeAvatar?: string
	password?: string
}

export {
	type Task,
	type CreateTaskPayload,
	type UpdateTaskPayload,
	type User,
	type Role,
	type Credentials,
	type CreateUserPayload,
	type UpdateUserPayload
}
