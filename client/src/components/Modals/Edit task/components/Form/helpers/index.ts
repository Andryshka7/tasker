import { Task, UpdateTaskPayload } from '@/types'

const getUpdateFields = (task: Task, data: Omit<Task, 'id' | 'team' | 'creator' | 'completed'>) => {
	const updateFields: UpdateTaskPayload = {}

	const { title, description, due, priority, user } = data

	if (title !== task.title) updateFields.title = title
	if (description !== task.description) updateFields.description = description
	if (priority !== task.priority) updateFields.priority = priority
	if (user !== task.user) updateFields.user = user
	if (due !== task.due) updateFields.due = due

	return updateFields
}

export { getUpdateFields }
