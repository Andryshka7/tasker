'use client'

import { type User } from '@/types'
import { create } from 'zustand'

interface CreateUserStore {
	user: User | null
	visible: boolean
	open: (user: User) => void
	close: () => void
}

const useCreateUserModal = create<CreateUserStore>()((set) => ({
	user: null,
	visible: false,
	open: (user) => {
		set({ user, visible: true })
	},
	close: () => {
		set({ visible: false })
	}
}))

export default useCreateUserModal
