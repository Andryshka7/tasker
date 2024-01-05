'use client'

import { type Task } from '@/types'
import { create } from 'zustand'

interface CreateTaskStore {
	task: Task | null
	visible: boolean
	open: (task: Task) => void
	close: () => void
}

const useTaskPreviewModal = create<CreateTaskStore>()((set) => ({
	task: null,
	visible: false,
	open: (task) => {
		set({ task, visible: true })
	},
	close: () => {
		set({ task: null, visible: false })
	}
}))

export default useTaskPreviewModal
