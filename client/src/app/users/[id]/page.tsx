import { User } from 'types'

interface Props {
    params: {
        id: string
    }
}

const User = async ({ params }: Props) => {
    const { id } = params
    const response = await fetch(`http://localhost:4000/users/${id}`, { next: { revalidate: 60 } })
    const user: User = await response.json()

    return <pre>{JSON.stringify(user, null, 4)}</pre>
}
export default User
