'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

import { useHandleClickOuthide } from '@/hooks'
import { useCreateTeamModal } from '@/hooks/modals'

import { AvatarInput } from './components'

type FormFields = {
	name: string
	surname: string
	email: string
	password: string
	confirmPassword: string
}

const Form = () => {
	const ref = useRef<HTMLFormElement | null>(null)

	const { close } = useCreateTeamModal()
	const { watch, handleSubmit, register } = useForm<FormFields>()

	const [avatar, setAvatar] = useState<File | null>(null)

	const name = watch('name')
	const surname = watch('surname')

	useHandleClickOuthide(ref, close)

	const onSubmit = async (data: FormFields) => {
		// close()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='relative flex justify-between gap-10 rounded-md bg-blue p-10'
			ref={ref}
		>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-5 top-4 cursor-pointer'
			/>

			<div className='mt-10 flex w-72 flex-col items-center'>
				<AvatarInput avatar={avatar} setAvatar={setAvatar} />
				<h1 className='mt-3 text-3xl font-bold'>
					{name || 'Name'} {surname || 'Surname'}
				</h1>
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

				<div className='ml-auto mt-8 flex w-fit gap-5'>
					<button
						className='flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-sky-600'
						onClick={() => {
							console.log('click')
						}}
					>
						<IoMdArrowRoundForward size={20} />
					</button>
				</div>
			</div>
		</form>
	)
}
export default Form
