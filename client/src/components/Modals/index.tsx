import {
	ConfirmationModal, CreateTaskModal, CreateUserModal, EditTaskModal, EditUserModal, TaskPreview
} from './components'

const Modals = () => (
	<>
		<CreateUserModal />
		<EditUserModal />
		<TaskPreview />
		<CreateTaskModal />
		<EditTaskModal />
		<ConfirmationModal />
	</>
)

export default Modals
