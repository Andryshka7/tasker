import { createUserQuery, deleteUserQuery, updateUserQuery } from '@/api/users'
import { useUsers } from '@/hooks'
import { CreateUserPayload, UpdateUserPayload } from '@/types'
import toast from 'react-hot-toast'

const useCreateUser = () => {
	const { refetch } = useUsers()

	return (userDetails: CreateUserPayload) => {
		const createUser = async () => {
			await createUserQuery(userDetails)
			await refetch()
			close()
		}

		toast.promise(createUser(), {
			success: 'Successfully created a user!',
			loading: 'Creating a user...',
			error: 'Could not create a user!'
		})
	}
}

const useUpdateUser = (id: number) => {
	const { refetch } = useUsers()

	return (updateUserPayload: UpdateUserPayload) => {
		const updateUser = async () => {
			await updateUserQuery(id, updateUserPayload)
			await refetch()
			close()
		}

		toast.promise(updateUser(), {
			success: 'Successfully updated a user!',
			loading: 'Updating a user...',
			error: 'Could not update a user!'
		})
	}
}

const useDeleteUser = (id: number) => {
	const { refetch } = useUsers()
	return async () => {
		const deleteUser = async () => {
			await deleteUserQuery(id)
			await refetch()
		}
		toast.promise(deleteUser(), {
			success: 'User has been deleted.',
			loading: 'Deleting user...',
			error: 'Could not delete a user.'
		})
	}
}

export { useCreateUser, useUpdateUser, useDeleteUser }
