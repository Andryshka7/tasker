import { server } from '@/config'
import { CreateReportPayload } from '@/types'

const createReportQuery = async ({ name, description, images }: CreateReportPayload) => {
	const formData = new FormData()

	formData.append('name', name)
	formData.append('description', description)

	if (images) {
		images.forEach((image) => formData.append('image', image))
	}

	console.log([...formData])

	const response = await fetch(`${server}/reports`, {
		method: 'POST',
		credentials: 'include',
		body: formData
	})

	if (!response.ok) {
		console.log(await response.json())
		throw new Error('Error while sending report!')
	}
}

export { createReportQuery }
