'use client'

import { useCreateTaskModal } from '@/app/components/Modals/hooks'
import { type User } from '@/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'
import { PrioritySelector, UserSelector } from './components'

type FormFields = {
	title: string
	description: string
}

const Form = () => {
	const [priority, setPriority] = useState(1)
	const [user, setUser] = useState<User | null>(null)

	const { register, handleSubmit } = useForm<FormFields>()
	const { close } = useCreateTaskModal()

	const onSubmit = (data: FormFields) => {
		console.log({ ...data, priority, user })
	}

	return (
		<form
			className='relative w-[820px] rounded-md bg-blue px-12 py-5'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className='text-4xl font-bold'>Create task</h1>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-5 top-4 cursor-pointer'
			/>

			<input
				{...register('title')}
				className='mt-6 block w-full rounded border-2 border-neutral-400 bg-transparent px-4 py-2 text-lg font-semibold'
				placeholder='Title'
			/>

			<textarea
				{...register('description')}
				className='mt-5 block h-24 max-h-56 w-full rounded border-2 border-neutral-400 bg-transparent px-4 py-1 text-lg font-semibold'
				placeholder='Description'
			/>

			<PrioritySelector priority={priority} selectPriority={setPriority} />
			<UserSelector user={user} selectUser={setUser} />

			<div className='mx-auto mt-12 flex w-fit gap-5'>
				<button
					type='submit'
					className='h-8 w-40 rounded bg-green-600 text-lg font-semibold'
				>
					Create
				</button>
				<button
					onClick={close}
					className='h-8 w-40 rounded bg-red-500 text-lg font-semibold'
				>
					Cancel
				</button>
			</div>
		</form>
	)
}
export default Form
