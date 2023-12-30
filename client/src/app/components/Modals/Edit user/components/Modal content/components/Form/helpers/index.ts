import { User } from '@/types'

type UpdateFields = Partial<Omit<User, 'id' | 'avatar'>> & {
	avatar?: File | null
	previousAvatar?: string
}

const getUpdateFields = (
	user: User,
	data: Omit<User, 'id' | 'avatar'> & { avatar: File | string | null }
) => {
	const updateFields: UpdateFields = {}

	const { name, surname, email, role, password, avatar } = data

	if (name !== user.name) updateFields.name = name
	if (surname !== user.surname) updateFields.surname = surname
	if (email !== user.email) updateFields.email = email
	if (role !== user.role) updateFields.role = role

	if (typeof avatar !== 'string' && avatar !== user.avatar) updateFields.avatar = avatar

	if (password) updateFields.password = password

	if (user.avatar) updateFields.previousAvatar = user.avatar

	return updateFields
}

export { getUpdateFields }
