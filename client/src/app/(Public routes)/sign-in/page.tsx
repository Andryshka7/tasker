'use client'

import API from 'api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormState = {
    email: string
    password: string
}

const Page = () => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit } = useForm<FormState>()

    const onSubmit = async (data: FormState) => {
        setIsSubmitting(true)
        try {
            const response = await API.post('auth', data)
            router.push('/')
            console.log(response.data)
        } catch (error) {
            console.log('Error while auth')
        }
        setIsSubmitting(false)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='m-auto mt-24 flex w-[500px] flex-col items-center rounded-lg bg-primary'
        >
            <h1 className='mt-10 text-3xl font-bold'>Welcome back!</h1>
            <input
                {...register('email')}
                type='text'
                className='mt-8 w-2/3 border-b-2 border-slate-500 bg-transparent px-4 py-2 text-xl font-semibold'
                placeholder='Email'
            />
            <input
                {...register('password')}
                type='password'
                className='mt-6 w-2/3 border-b-2 border-slate-500 bg-transparent px-4 py-2 text-xl font-semibold'
                placeholder='Password'
            />
            <button
                type='submit'
                className='my-12 rounded bg-green-600 px-8 py-1 font-semibold duration-200 hover:bg-opacity-90 disabled:bg-opacity-70'
                disabled={isSubmitting}
            >
                Login
            </button>
        </form>
    )
}
export default Page
