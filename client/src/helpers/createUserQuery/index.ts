import { User } from '@/types'

type Payload = Omit<User, 'avatar' | 'id'> & { password: string; avatar: File | null }

const createUserQuery = async ({ name, surname, email, password, role, avatar }: Payload) => {
	const formData = new FormData()

	formData.append('name', name)
	formData.append('surname', surname)
	formData.append('email', email)
	formData.append('password', password)
	formData.append('role', role)
	if (avatar) formData.append('image', avatar)

	const response = await fetch('http://localhost:4000/users', {
		method: 'POST',
		credentials: 'include',
		body: formData
	})

	if (!response.ok) {
		throw new Error('Error while creating user!')
	}
}

export default createUserQuery
