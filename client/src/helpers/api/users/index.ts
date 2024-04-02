import { server } from '@/config'
import { CreateUserPayload, UpdateUserPayload, User } from '@/types'

const fetchUsersQuery = async () => {
	const response = await fetch(`${server}/users`, {
		credentials: 'include',
		cache: 'no-cache'
	})
	return response.ok ? ((await response.json()) as User[]) : []
}

const createUserQuery = async ({
	name,
	surname,
	email,
	password,
	role,
	avatar
}: CreateUserPayload) => {
	const formData = new FormData()

	formData.append('name', name)
	formData.append('surname', surname)
	formData.append('email', email)
	formData.append('password', password)
	formData.append('role', role)
	if (avatar) formData.append('image', avatar)

	const response = await fetch(`${server}/users`, {
		method: 'POST',
		credentials: 'include',
		body: formData
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while creating user!')
	}
}

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

const deleteUserQuery = async (id: number) => {
	const response = await fetch(`${server}/users/${id}`, {
		method: 'DELETE',
		credentials: 'include'
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while deleting user!')
	}
}

export { fetchUsersQuery, createUserQuery, updateUserQuery, deleteUserQuery }
