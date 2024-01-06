'use client'

import { useEditUserModal } from '@/components/Modals/hooks'
import { useUpdateUser } from '@/hooks'
import { Role, User } from '@/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'
import { AvatarInput, RoleSelector } from './components'
import { getUpdateFields } from './helpers'

type FormFields = {
	name: string
	surname: string
	email: string
	password: string
	confirmPassword: string
}

const Form = (user: User) => {
	const { close } = useEditUserModal()

	const { watch, handleSubmit, register } = useForm<FormFields>({
		defaultValues: {
			name: user.name,
			surname: user.surname,
			email: user.email
		}
	})

	const [avatar, setAvatar] = useState<File | string | null>(user.avatar)
	const [role, setRole] = useState<Role>(user.role)

	const name = watch('name')
	const surname = watch('surname')

	const updateUser = useUpdateUser(user.id)

	const onSubmit = async (data: FormFields) => {
		const updateFields = getUpdateFields(user, { ...data, role, avatar })
		await updateUser(updateFields)
		close()
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
					className='my-4 block w-96 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
					placeholder='Confirm password'
				/>

				<div className='mx-auto mt-8 flex w-fit gap-5'>
					<button
						type='submit'
						className='h-8 w-36 rounded-md bg-green-600 font-semibold'
					>
						Update
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
