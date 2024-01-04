'use client'

import { create } from 'zustand'

interface ConfirmationModalStore {
	visible: boolean
	name: string | null
	text: string | null
	confirmAction: () => void
	open: (configuration: { name: string; text: string; confirmAction: () => void }) => void
	close: () => void
}
const useConfirmationModal = create<ConfirmationModalStore>()((set) => ({
	visible: false,
	name: null,
	text: null,
	confirmAction: async () => {},
	open: (configuration) => {
		set({ visible: true, ...configuration })
	},
	close: () => {
		set({ visible: false, text: null, confirmAction: () => {} })
	}
}))

export default useConfirmationModal
