import { server } from '@/config'
import { UpdateUserPayload } from '@/types'

const updateUserQuery = async (id: number, updateFields: UpdateUserPayload) => {
	const formData = new FormData()

	const { name, surname, email, password, role, avatar, removeAvatar } = updateFields

	if (name) formData.append('name', name)
	if (surname) formData.append('surname', surname)
	if (email) formData.append('email', email)
	if (password) formData.append('password', password)
	if (role) formData.append('role', role)
	if (avatar) formData.append('image', avatar)
	if (removeAvatar) formData.append('removeAvatar', removeAvatar)

	const response = await fetch(`${server}/users/${id}`, {
		method: 'PATCH',
		credentials: 'include',
		body: formData
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while updating user!')
	}
}

export default updateUserQuery
