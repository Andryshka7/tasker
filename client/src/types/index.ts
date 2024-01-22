type Role = 'admin' | 'moderator' | 'user'
type Priority = 1 | 2 | 3 | 4

interface Team {
	id: number
	creator: User
	name: string
	users: User[]
	tasks: Task[]
}

interface Task {
	id: number
	title: string
	description: string
	priority: Priority
	completed: string | null
	due: string
	user: User | null
	creator: User
}

interface User {
	id: number
	name: string
	surname: string
	email: string
	role: Role
	lastActive: string | null
	avatar: string | null
}

interface Credentials {
	email: string
	password: string
}

type CreateTeamPayload = { teamName: string } & Pick<User, 'name' | 'surname' | 'email'> & {
		password: string
		avatar: File | null
	}

type CreateTaskPayload = Omit<Task, 'id' | 'completed'>

type UpdateTaskPayload = Partial<Omit<Task, 'id'>>

type CreateUserPayload = Omit<User, 'avatar' | 'id' | 'lastActive'> & {
	avatar: File | null
	password: string
}
type UpdateUserPayload = Partial<Omit<User, 'id' | 'avatar' | 'lastActive'>> & {
	avatar?: File | null
	removeAvatar?: string
	password?: string
}
export {
	type Role,
	type Priority,
	type Task,
	type User,
	type CreateTeamPayload,
	type CreateTaskPayload,
	type UpdateTaskPayload,
	type Credentials,
	type CreateUserPayload,
	type UpdateUserPayload
}
