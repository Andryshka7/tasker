import { User } from 'types'

const Users = async () => {
    const response = await fetch('http://localhost:4000/users', { next: { revalidate: 60 } })
    const users: User[] = await response.json()
    await new Promise((res) => setTimeout(res, 2000))

    return (
        <div>
            <h2>Users</h2>
            <ul className='mt-2'>
                {users.map((user) => (
                    <pre key={user.id}>{JSON.stringify(user, null, 4)}</pre>
                ))}
            </ul>
        </div>
    )
}

export default Users
