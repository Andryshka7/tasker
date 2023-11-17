import { type User } from 'types'
import { headers } from 'next/headers'
import CreateTaskModal from './Create task'

const Modals = async () => {
	const response = await fetch('http://localhost:4000/users', {
		headers: headers(),
		next: { revalidate: 60 }
	})
	const users = response.ok ? ((await response.json()) as User[]) : []

	return (
		<>
			<CreateTaskModal users={users} />
		</>
	)
}

export default Modals
