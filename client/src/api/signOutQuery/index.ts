const signOutQuery = async () => {
	const response = await fetch('http://localhost:4000/auth/signout', {
		credentials: 'include',
		method: 'POST'
	})

	if (!response.ok) throw new Error('Error while signing out!')
}

export default signOutQuery
