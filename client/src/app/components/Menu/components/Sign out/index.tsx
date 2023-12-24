'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaSignOutAlt } from 'react-icons/fa'

const SignOut = () => {
	const router = useRouter()

	const signOutCb = async () => {
		try {
			await fetch('http://localhost:4000/auth/signout', {
				credentials: 'include',
				method: 'POST'
			})
		} catch (error) {
			console.log('error while signing out')
		} finally {
			router.refresh()
			router.push('sign-in')
		}
	}

	useEffect(() => {
		router.prefetch('/sign-in')
	}, [router])

	return (
		<div className='mx-auto mb-3 mt-7 flex w-fit cursor-pointer items-center gap-2' onClick={signOutCb}>
			<FaSignOutAlt size={20} />
			<h3 className='font-bold'>Sign out</h3>
		</div>
	)
}

export default SignOut
