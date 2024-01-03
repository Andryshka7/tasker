'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaSignOutAlt } from 'react-icons/fa'
import { signOutQuery } from '@/api/auth'
import toast from 'react-hot-toast'

const SignOut = () => {
	const router = useRouter()

	const signOut = async () => {
		try {
			await signOutQuery()
		} catch (error) {
			toast.error('Error while signing out!')
		} finally {
			router.refresh()
			router.push('sign-in')
		}
	}

	useEffect(() => {
		router.prefetch('/sign-in')
	}, [router])

	return (
		<div
			className='mx-auto mb-3 mt-7 flex w-fit cursor-pointer items-center gap-2'
			onClick={signOut}
		>
			<FaSignOutAlt size={20} />
			<h3 className='font-bold'>Sign out</h3>
		</div>
	)
}

export default SignOut
