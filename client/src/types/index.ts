type Role = 'admin' | 'moderator' | 'user'
type Priority = 1 | 2 | 3 | 4

interface Task {
	id: number
	title: string
	description: string
	priority: Priority
	completed: boolean
	due: Date
	user: User | null
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

interface Credentials {
	email: string
	password: string
}

type CreateTaskPayload = Omit<Task, 'id'>

type UpdateTaskPayload = Partial<Omit<Task, 'id'>>

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
	type Role,
	type Priority,
	type Task,
	type User,
	type CreateTaskPayload,
	type UpdateTaskPayload,
	type Credentials,
	type CreateUserPayload,
	type UpdateUserPayload
}
