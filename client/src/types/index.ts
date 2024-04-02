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
	creator: User
	user: User | null
	team: Team
	completed: string | null
	due: string
}

interface User {
	id: number
	name: string
	surname: string
	email: string
	role: Role
	team: Team
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

type CreateTaskPayload = Omit<Task, 'id' | 'team' | 'completed'>
type UpdateTaskPayload = Partial<Omit<Task, 'id' | 'team'>>

type CreateUserPayload = Omit<User, 'avatar' | 'id' | 'lastActive' | 'team'> & {
	avatar: File | null
	password: string
}
type UpdateUserPayload = Partial<Omit<User, 'id' | 'avatar' | 'lastActive' | 'team'>> & {
	avatar?: File | null
	removeAvatar?: string
	password?: string
}

type CreateReportPayload = {
	name: string
	description: string
	images: File[] | null
}

export {
	type Role,
	type Priority,
	type Task,
	type User,
	type Credentials,
	type CreateTeamPayload,
	type CreateTaskPayload,
	type UpdateTaskPayload,
	type CreateUserPayload,
	type UpdateUserPayload,
	type CreateReportPayload
}
