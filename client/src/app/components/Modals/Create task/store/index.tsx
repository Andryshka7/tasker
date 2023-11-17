'use client'

import { create } from 'zustand'

interface CreateTaskStore {
	visible: boolean
	open: () => void
	close: () => void
}

const useCreateTaskModal = create<CreateTaskStore>()((set) => ({
	visible: false,
	open: () => {
		set({ visible: true })
	},
	close: () => {
		set({ visible: false })
	}
}))

export default useCreateTaskModal
