import { type UpdateUserPayload, type User } from '@/types'

const getUpdateFields = (
	user: User,
	data: Omit<User, 'id' | 'avatar' | 'lastActive'> & {
		avatar: File | string | null
		password: string
	}
) => {
	const updateFields: UpdateUserPayload = {}

	const { name, surname, email, role, password, avatar } = data

	if (name !== user.name) updateFields.name = name
	if (surname !== user.surname) updateFields.surname = surname
	if (email !== user.email) updateFields.email = email
	if (role !== user.role) updateFields.role = role

	if (user.avatar && user.avatar !== avatar) updateFields.removeAvatar = 'true'
	if (avatar && typeof avatar !== 'string') updateFields.avatar = avatar

	if (password) updateFields.password = password

	return updateFields
}

export { getUpdateFields }
