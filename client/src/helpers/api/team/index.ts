import { server } from '@/config'
import { CreateTeamPayload } from '@/types'

const createTeamQuery = async (teamDetails: CreateTeamPayload) => {
	const { name, surname, email, password, avatar, teamName } = teamDetails

	const formData = new FormData()

	formData.append('name', name)
	formData.append('surname', surname)
	formData.append('email', email)
	formData.append('password', password)
	formData.append('teamName', teamName)

	if (avatar) formData.append('image', avatar)

	const response = await fetch(`${server}/teams`, {
		method: 'POST',
		credentials: 'include',
		body: formData
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while creating team!')
	}
}

export { createTeamQuery }
