'use client'

import { create } from 'zustand'

interface CreateUserStore {
	visible: boolean
	open: () => void
	close: () => void
}

const useCreateUserModal = create<CreateUserStore>()((set) => ({
	visible: false,
	open: () => {
		set({ visible: true })
	},
	close: () => {
		set({ visible: false })
	}
}))

export default useCreateUserModal
