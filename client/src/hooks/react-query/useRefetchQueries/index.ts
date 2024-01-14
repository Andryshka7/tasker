import useAuth from '../useAuth'
import useTasks from '../useTasks'
import useUsers from '../useUsers'

const useRefetchQueries = () => {
	const { refetch: refetchAuthQuery } = useAuth()
	const { refetch: refetchTasksQuery } = useTasks()
	const { refetch: refetchUsersQuery } = useUsers()

	return () => Promise.all([refetchAuthQuery(), refetchTasksQuery(), refetchUsersQuery()])
}

export default useRefetchQueries
