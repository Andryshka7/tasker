import { type Task, type User } from '@/types'
import { createDefaultHook, createParameterizedHook } from './helpers'
import useConfirmationModal from './useConfirmationModal'

const useCreateTaskModal = createDefaultHook()
const useCreateUserModal = createDefaultHook()

const useEditUserModal = createParameterizedHook<User>()
const useEditTaskModal = createParameterizedHook<Task>()
const useTaskPreviewModal = createParameterizedHook<Task>()

export {
	useCreateTaskModal,
	useEditUserModal,
	useConfirmationModal,
	useTaskPreviewModal,
	useEditTaskModal,
	useCreateUserModal
}
