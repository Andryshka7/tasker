'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

type FormState = {
	email: string
	password: string
}

const Page = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const { register, handleSubmit } = useForm<FormState>()

	const onSubmit = async (credentials: FormState) => {
		setLoading(true)

		const response = await fetch('http://localhost:4000/auth', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})

		if (response.ok) {
			router.refresh()
			router.push('/')
		} else {
			setLoading(false)
			console.log('Error while signing in')
		}
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
				Login
			</button>
		</form>
	)
}
export default Page
