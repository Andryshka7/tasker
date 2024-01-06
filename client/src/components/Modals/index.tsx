import ConfirmationModal from './Confirmation'
import CreateTaskModal from './Create task'
import CreateUserModal from './Create user'
import EditTaskModal from './Edit task'
import EditUserModal from './Edit user'
import TaskPreview from './Task preview'

const Modals = () => (
	<>
		<CreateTaskModal />
		<CreateUserModal />
		<EditUserModal />
		<ConfirmationModal />
		<TaskPreview />
		<EditTaskModal />
	</>
)

export default Modals
