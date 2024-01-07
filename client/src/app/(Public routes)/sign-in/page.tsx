'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signInQuery } from '@/api/auth'
import toast from 'react-hot-toast'
import { type Credentials } from '@/types'

const Page = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const { register, handleSubmit } = useForm<Credentials>()

	const onSubmit = async (credentials: Credentials) => {
		const signIn = async () => {
			try {
				setLoading(true)
				await signInQuery(credentials)
				router.refresh()
				router.push('/')
			} catch (error) {
				setLoading(false)
				throw error
			}
		}

		toast.promise(signIn(), {
			success: 'Logged in.',
			loading: 'Logging in...',
			error: 'Invalid credentials'
		})
	}

	useEffect(() => {
		router.prefetch('/')
	}, [router])

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='m-auto mt-24 flex w-[500px] flex-col items-center rounded-lg bg-blue'
		>
			<h1 className='mt-10 text-3xl font-bold'>Welcome back!</h1>
			<input
				{...register('email')}
				type='text'
				className='mt-8 w-80 border-b-2 border-slate-500 bg-transparent px-4 py-2 text-xl font-semibold'
				placeholder='Email'
			/>
			<input
				{...register('password')}
				type='password'
				className='mt-6 w-80 border-b-2 border-slate-500 bg-transparent px-4 py-2 text-xl font-semibold'
				placeholder='Password'
			/>
			<button
				type='submit'
				className='my-12 rounded bg-green-600 px-8 py-1 font-semibold duration-200 hover:bg-opacity-90 disabled:bg-opacity-80'
				disabled={loading}
			>
				Sign in
			</button>
		</form>
	)
}
export default Page
