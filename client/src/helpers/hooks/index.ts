import { create } from 'zustand'

interface DefaultStore {
	visible: boolean
	open: () => void
	close: () => void
}

type ParameterizedStore<T> = {
	value: T | null
	visible: boolean
	open: (value: T) => void
	close: () => void
}

const createDefaultHook = () =>
	create<DefaultStore>()((set) => ({
		visible: false,
		open: () => {
			set({ visible: true })
		},
		close: () => {
			set({ visible: false })
		}
	}))

const createParameterizedHook = <T>() =>
	create<ParameterizedStore<T>>()((set) => ({
		value: null,
		visible: false,
		open: (value) => {
			set({ value, visible: true })
		},
		close: () => {
			set({ visible: false })
		}
	}))

export { createDefaultHook, createParameterizedHook }
