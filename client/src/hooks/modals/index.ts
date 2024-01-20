import { createDefaultHook, createParameterizedHook } from '@/helpers/hooks'
import { Task, User } from '@/types'

import useConfirmationModal from './useConfirmationModal'

const useCreateTaskModal = createDefaultHook()
const useCreateUserModal = createDefaultHook()
const useCreateTeamModal = createDefaultHook()

const useEditUserModal = createParameterizedHook<User>()
const useEditTaskModal = createParameterizedHook<Task>()
const useTaskPreviewModal = createParameterizedHook<Task>()

export {
	useCreateUserModal,
	useCreateTaskModal,
	useCreateTeamModal,
	useEditUserModal,
	useEditTaskModal,
	useTaskPreviewModal,
	useConfirmationModal
}
