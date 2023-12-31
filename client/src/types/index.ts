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
	password: string
	role: Role
	avatar: string | null
}

type Role = 'admin' | 'moderator' | 'user'

interface Credentials {
	email: string
	password: string
}

type CreateUserPayload = Omit<User, 'avatar' | 'id'> & { avatar: File | null }
type UpdateUserPayload = Partial<Omit<User, 'id' | 'avatar'>> & {
	avatar?: File | null
	removeAvatar?: string
}

export {
	type Task,
	type User,
	type Role,
	type Credentials,
	type CreateUserPayload,
	type UpdateUserPayload
}
