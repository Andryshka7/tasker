import { User } from '.'

interface Task {
    id: number
    title: string
    description: string
    user: User
}

export default Task
