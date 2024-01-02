'use client'

import { useCreateUserModal } from '@/app/components/Modals/hooks'
import { createUserQuery } from '@/api'
import { useUsers } from '@/hooks'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { IoClose } from 'react-icons/io5'
import { AvatarInput, RoleSelector } from './components'
import { type Role } from '@/types'

type FormFields = {
	name: string
	surname: string
	email: string
	password: string
	confirmPassword: string
}

const Form = () => {
	const { refetch } = useUsers()
	const { close } = useCreateUserModal()
	const { watch, handleSubmit, register } = useForm<FormFields>()

	const [avatar, setAvatar] = useState<File | null>(null)
	const [role, setRole] = useState<Role>('user')

	const name = watch('name')
	const surname = watch('surname')

	const onSubmit = async (data: FormFields) => {
		const createUser = async () => {
			await createUserQuery({ ...data, role, avatar })
			await refetch()
			close()
		}

		toast.promise(createUser(), {
			success: 'Successfully created a user!',
			loading: 'Creating a user...',
			error: 'Could not create a user!'
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='relative flex justify-between gap-10 rounded-md bg-blue p-10'
		>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-5 top-4 cursor-pointer'
			/>

			<div className='mt-5 flex w-72 flex-col items-center'>
				<AvatarInput avatar={avatar} setAvatar={setAvatar} />
				<h1 className='mt-3 text-3xl font-bold'>
					{name || 'Name'} {surname || 'Surname'}
				</h1>
				<RoleSelector role={role} selectRole={setRole} />
			</div>

			<div>
				<input
					{...register('name')}
					className='my-2 block w-96 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
					placeholder='Name'
				/>
				<input
					{...register('surname')}
					className='my-4 block w-96 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
					placeholder='Surname'
				/>
				<input
					{...register('email')}
					className='my-4 block w-96 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
					placeholder='Email'
				/>
				<input
					type='password'
					{...register('password')}
					className='my-4 block w-96 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
					placeholder='Password'
				/>
				<input
					type='password'
					{...register('confirmPassword')}
					className='my-4 block w-96 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
					placeholder='Confirm password'
				/>

				<div className='mx-auto mt-8 flex w-fit gap-5'>
					<button
						type='submit'
						className='h-8 w-36 rounded-md bg-green-600 font-semibold'
					>
						Create
					</button>
					<button
						onClick={close}
						className='h-8 w-36 rounded-md bg-red-500 font-semibold'
					>
						Cancel
					</button>
				</div>
			</div>
		</form>
	)
}
export default Form
