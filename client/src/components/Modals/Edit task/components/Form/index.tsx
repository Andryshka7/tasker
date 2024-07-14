'use client'

import { useHandleClickOuthide, useUpdateTask } from '@/hooks'
import { useEditTaskModal } from '@/hooks/modals'
import { Priority, Task, User } from '@/types'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'

import { DatePicker, PrioritySelector, UserSelector } from './components'
import { getUpdateFields } from './helpers'

type FormFields = {
	title: string
	description: string
}

const Form = (task: Task) => {
	const ref = useRef<HTMLFormElement | null>(null)

	const [priority, setPriority] = useState<Priority>(task.priority)
	const [user, setUser] = useState<User | null>(task.user)
	const [date, setDate] = useState<string>(task.due)

	const updateTask = useUpdateTask(task.id)

	const { close } = useEditTaskModal()

	const { register, handleSubmit } = useForm<FormFields>({
		defaultValues: {
			title: task.title,
			description: task.description
		}
	})

	useHandleClickOuthide(ref, close)

	const onSubmit = async (data: FormFields) => {
		const updateFields = getUpdateFields(task, { ...data, priority, user, due: date })
		await updateTask(updateFields)
		close()
	}

	return (
		<form
			className='relative w-[820px] rounded-md bg-blue px-12 py-8'
			onSubmit={handleSubmit(onSubmit)}
			ref={ref}
		>
			<h1 className='text-4xl font-bold'>Edit task</h1>
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

			<PrioritySelector selectedPriority={priority} selectPriority={setPriority} />

			<div className='mt-4 flex items-center justify-between'>
				<UserSelector user={user} selectUser={setUser} />
				<DatePicker selectedDate={date} setSelectedDate={setDate} />
			</div>

			<div className='mx-auto mt-12 flex w-fit gap-5'>
				<button
					type='submit'
					className='h-8 w-40 rounded bg-green-600 text-lg font-semibold'
				>
					Update
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
