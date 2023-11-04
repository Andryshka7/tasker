'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import API from 'api'
import { useAppDispatch } from 'redux-toolkit'
import { User } from 'types'
import { signIn } from 'redux-toolkit/auth'

interface Props {
	children: ReactNode
}

const AuthRedirector = ({ children }: Props) => {
	const router = useRouter()

	const [loading, setLoading] = useState(true)

	const login = async () => {
		setLoading(true)
		try {
			await API.get('auth/me')
			setLoading(false)
		} catch {
			router.push('sign-in')
		}
	}

	useEffect(() => {
		router.prefetch('sign-in')
	}, [router])

	useEffect(() => {
		login()
	}, [])

	if (loading) {
		return <h1>Loading</h1>
	}

	return children
}

export default AuthRedirector
