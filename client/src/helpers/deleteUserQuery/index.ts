const deleteUserQuery = async (id: number) => {
	const response = await fetch(`http://localhost:4000/users/${id}`, {
		method: 'DELETE',
		credentials: 'include'
	})

	if (!response.ok) throw new Error('Error while signing in!')
}

export default deleteUserQuery
