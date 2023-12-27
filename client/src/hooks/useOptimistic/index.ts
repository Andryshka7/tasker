import { useState } from 'react'

const useOptimistic = <T>(initialState: T, updateFn: (payload: T) => Promise<void>) => {
	const [state, setState] = useState<T>(initialState)
	const [optimisicState, setOptimisicState] = useState<T>(initialState)

	const updateState = async (payload: T) => {
		setOptimisicState(payload)
		try {
			await updateFn(payload)
			setState(payload)
		} catch (error) {
			setOptimisicState(state)
		}
	}

	return [optimisicState, updateState] as [typeof optimisicState, typeof updateState]
}

export default useOptimistic
