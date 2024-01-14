import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { signInQuery, signOutQuery } from '@/helpers/api/auth'
import { useRefetchQueries } from '@/hooks'
import { Credentials } from '@/types'

const useSignIn = () => {
	const router = useRouter()
	const refetchQueries = useRefetchQueries()
	const [isLoading, setIsLoading] = useState(false)

	return [
		isLoading,
		async (credentials: Credentials) => {
			const signIn = async () => {
				setIsLoading(true)
				await signInQuery(credentials)
				await refetchQueries()
				router.refresh()
				router.push('/')
			}

			await toast.promise(signIn(), {
				success: 'Successfully logged in.',
				loading: 'Logging in...',
				error: () => {
					setIsLoading(false)
					return 'Invalid credentials'
				}
			})
		}
	] as [boolean, (credentials: Credentials) => void]
}

const useSignOut = () => {
	const router = useRouter()

	useEffect(() => {
		router.prefetch('/sign-in')
	}, [router])

	return () => {
		const signOut = async () => {
			await signOutQuery()
			router.refresh()
			router.push('/sign-in')
		}

		toast.promise(signOut(), {
			success: 'Successfully signed out',
			loading: 'Signing out...',
			error: 'An error occured while signing out'
		})
	}
}

export { useSignIn, useSignOut }
