'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaSignOutAlt } from 'react-icons/fa'
import API from 'api'

const SignOut = () => {
	const router = useRouter()

	const logout = async () => {
		try {
			await API.post('auth/logout')
			router.push('sign-in')
		} catch (error) {
			console.log('error while logging out')
		}
	}

	useEffect(() => {
		router.prefetch('/sign-in')
	}, [])

	return (
		<div className='mx-auto mb-3 mt-7 flex w-fit cursor-pointer items-center gap-2' onClick={logout}>
			<FaSignOutAlt size={20} />
			<h3 className='font-bold'>Sign out</h3>
		</div>
	)
}

export default SignOut
