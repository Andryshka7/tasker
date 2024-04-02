'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'

import { useHandleClickOuthide } from '@/hooks'
import { useCreateReport } from '@/hooks/api-communication/reports'
import { useReportBugModal } from '@/hooks/modals'

import { ImagesInput } from './components'

type FormFields = {
	name: string
	description: string
}

const Form = () => {
	const ref = useRef<HTMLFormElement | null>(null)

	const [images, setImages] = useState<File[]>([])

	const { register, handleSubmit } = useForm<FormFields>()
	const { close } = useReportBugModal()

	const createReport = useCreateReport()

	useHandleClickOuthide(ref, close)

	const onSubmit = async (data: FormFields) => {
		await createReport({ ...data, images })
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='relative w-[700px] rounded-md bg-blue p-10'
			ref={ref}
		>
			<h1 className='text-4xl font-bold'>Report a bug</h1>
			<input
				{...register('name')}
				className='mt-7 block w-full rounded border-2 border-neutral-400 bg-transparent px-4 py-2 text-lg font-semibold'
				placeholder='Title'
			/>
			<textarea
				{...register('description')}
				className='mt-5 block h-24 max-h-56 w-full rounded border-2 border-neutral-400 bg-transparent px-4 py-1 text-lg font-semibold'
				placeholder='Description'
			/>

			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-5 top-4 cursor-pointer'
			/>

			<ImagesInput images={images} setImages={setImages} />

			<button
				type='submit'
				className='mx-auto mt-6 block rounded bg-green-600 px-8 py-1 text-lg font-semibold'
			>
				Submit
			</button>
		</form>
	)
}
export default Form
