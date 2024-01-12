import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { signInQuery, signOutQuery } from '@/helpers/api/auth'
import { Credentials } from '@/types'

const useSignIn = () => {
	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()

	useEffect(() => {
		router.prefetch('/')
	}, [router])

	return [
		isLoading,
		(credentials: Credentials) => {
			const signIn = async () => {
				setIsLoading(true)
				await signInQuery(credentials)
				router.refresh()
				router.push('/')
			}

			toast.promise(signIn(), {
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
