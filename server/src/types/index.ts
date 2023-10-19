import { Request } from 'express'

export interface Task {
    id: number
    title: string
    description: string
    user: User
}

export interface User {
    id: number
    name: string
    surname: string
    email: string
    role: string
    password: string
    avatar: string
    tasks: Task[]
}

export type RequestWithUser = { user: User } & Request
