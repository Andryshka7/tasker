'use client'

import { type User } from '@/types'
import { create } from 'zustand'

interface EditUserStore {
	user: User | null
	visible: boolean
	open: (user: User) => void
	close: () => void
}

const useUserStoreModal = create<EditUserStore>()((set) => ({
	user: null,
	visible: false,
	open: (user) => {
		set({ user, visible: true })
	},
	close: () => {
		set({ user: null, visible: false })
	}
}))

export default useUserStoreModal
