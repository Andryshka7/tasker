import { useRef } from 'react'
import { IoClose } from 'react-icons/io5'

import { useHandleClickOuthide } from '@/hooks'
import { useConfirmationModal } from '@/hooks/modals'

const Form = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { name, text, confirmAction, close } = useConfirmationModal()

	useHandleClickOuthide(ref, close)

	return (
		<div className='relative w-[550px] rounded-md bg-blue px-12 py-8' ref={ref}>
			<h1 className='text-3xl font-bold'>{name}</h1>
			<IoClose
				onClick={close}
				size={30}
				color='white'
				className='absolute right-5 top-4 cursor-pointer'
			/>

			<p className='mx-4 my-6 w-full text-center text-xl font-semibold'>{text}</p>

			<div className='mx-auto mt-8 flex w-fit gap-8'>
				<button
					className='rounded bg-green-600 px-10 py-1 font-semibold'
					onClick={async () => {
						await confirmAction()
						close()
					}}
				>
					Confirm
				</button>
				<button className='rounded bg-red-500 px-10 py-1 font-semibold' onClick={close}>
					Cancel
				</button>
			</div>
		</div>
	)
}
export default Form
