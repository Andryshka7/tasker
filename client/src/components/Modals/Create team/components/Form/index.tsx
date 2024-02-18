'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

import { useCreateTeam, useHandleClickOuthide } from '@/hooks'
import { useCreateTeamModal } from '@/hooks/modals'

import { AvatarInput } from './components'

type FormFields = {
	name: string
	surname: string
	email: string
	password: string
	confirmPassword: string
	teamName: string
}

const Form = () => {
	const ref = useRef<HTMLFormElement | null>(null)

	const [isSubmitted, setIsSubmitted] = useState(false)
	const [scrollPosition, setScrollPosition] = useState<1 | 2 | 3>(1)

	const { close: closeCreateTeamModal } = useCreateTeamModal()
	const { watch, handleSubmit, register } = useForm<FormFields>()

	const [avatar, setAvatar] = useState<File | null>(null)

	const createTeam = useCreateTeam()

	const name = watch('name')
	const surname = watch('surname')

	const close = () => {
		if (!isSubmitted) {
			closeCreateTeamModal()
		}
	}

	useHandleClickOuthide(ref, close)

	const onSubmit = async (data: FormFields) => {
		setIsSubmitted(true)
		await createTeam({ ...data, avatar })
		closeCreateTeamModal()
	}

	const getStyle = (scrollPosition: 1 | 2 | 3) => {
		const styles = {
			1: '',
			2: '-translate-x-1/3',
			3: '-translate-x-2/3'
		}
		return styles[scrollPosition]
	}

	return (
		<div className='relative flex w-[700px] overflow-hidden rounded-md bg-blue'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`relative flex w-[2100px] duration-200 ${getStyle(scrollPosition)}`}
				ref={ref}
			>
				<div className='flex w-[700px] flex-col p-10 pb-8 pt-10'>
					<h1 className='text-ellipsis text-3xl font-semibold'>Create profile</h1>
					<div className='mt-8 flex items-center justify-between'>
						<div className='-ml-2 flex w-64 flex-col items-center'>
							<AvatarInput avatar={avatar} setAvatar={setAvatar} />
							<h1 className='mt-3 text-center text-xl font-semibold'>
								{name || 'Name'} {surname || 'Surname'}
							</h1>
						</div>

						<div className='mr-14'>
							<input
								{...register('name')}
								className='my-2 block w-80 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
								placeholder='Name'
							/>
							<input
								{...register('surname')}
								className='my-4 block w-80 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
								placeholder='Surname'
							/>
							<input
								{...register('email')}
								className='my-4 block w-80 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
								placeholder='Email'
							/>
						</div>
					</div>
					<div
						className='ml-auto mt-auto flex h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-sky-600'
						onClick={() => setScrollPosition(2)}
					>
						<IoMdArrowRoundForward size={20} />
					</div>
				</div>
				<div className='flex w-[700px] flex-col gap-10 rounded-md p-10'>
					<h1 className='text-3xl font-semibold'>Create team</h1>
					<div className='mx-auto mt-4 flex items-center gap-10'>
						<img src='/team.png' className='h-24 w-24' alt='' />
						<input
							{...register('teamName')}
							className='block w-80 border-b-2 border-neutral-500 bg-transparent px-3 py-2 text-xl font-semibold'
							placeholder='Team name'
						/>
					</div>

					<div className='mt-auto flex items-center justify-between'>
						<div
							className='flex h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-sky-600'
							onClick={() => setScrollPosition(1)}
						>
							<IoMdArrowRoundBack size={20} />
						</div>
						<div
							className='flex h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-sky-600'
							onClick={() => setScrollPosition(3)}
						>
							<IoMdArrowRoundForward size={20} />
						</div>
					</div>
				</div>
				<div className='flex w-[700px] flex-col gap-10 rounded-md p-10'>
					<h1 className='text-3xl font-semibold'>Create password</h1>
					<div className='mx-auto mt-1.5 flex gap-10'>
						<img src='/password.png' className='mt-2.5 h-24 w-24' alt='' />
						<div>
							<input
								type='password'
								{...register('password')}
								className='block w-80 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
								placeholder='Password'
							/>
							<input
								type='password'
								{...register('confirmPassword')}
								className='mt-4 block w-80 border-b-2 border-neutral-500 bg-transparent p-2 font-semibold'
								placeholder='Confirm password'
							/>
							<button
								type='submit'
								className={`mx-auto mt-7 block h-7 w-32 rounded bg-green-600 text-sm font-semibold duration-200 ${
									isSubmitted ? 'opacity-70' : ''
								}`}
							>
								Continue
							</button>
						</div>
					</div>

					<div
						className={`mt-auto flex h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-sky-600 duration-200 ${
							isSubmitted ? 'opacity-70' : ''
						}`}
						onClick={() => setScrollPosition(2)}
					>
						<IoMdArrowRoundBack size={20} />
					</div>
				</div>
			</form>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className={`absolute right-5 top-4 ${
					!isSubmitted ? 'cursor-pointer' : 'pointer-events-none'
				}`}
			/>
		</div>
	)
}
export default Form
