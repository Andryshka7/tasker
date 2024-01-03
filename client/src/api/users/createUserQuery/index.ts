import { type CreateUserPayload } from '@/types'
import { server } from '@/config'

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
		throw new Error('Error while creating user!')
	}
}

export default createUserQuery
