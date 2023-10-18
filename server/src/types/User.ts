import { Task } from '.'

interface User {
    id: number
    name: string
    surname: string
    password: string
    role: string
    avatar: string
    tasks: Task[]
}

export default User
