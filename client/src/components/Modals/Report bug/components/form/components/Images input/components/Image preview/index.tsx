import { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'

import { Transition } from '@headlessui/react'

interface Props {
	image: File
	deleteImage: () => void
}

const ImagePreview = ({ image, deleteImage }: Props) => {
	const [isHovering, setIsHovering] = useState(false)

	console.log(isHovering)

	return (
		<div
			className='relative aspect-video w-24'
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<img
				className='absolute left-0 top-0 h-full w-full rounded bg-cover'
				src={URL.createObjectURL(image)}
			/>
			<Transition
				show={isHovering}
				className='duration-200'
				enterFrom='opacity-0'
				leaveTo='opacity-0'
			>
				<div className='absolute left-0 top-0 flex h-full w-full items-center justify-center rounded bg-black opacity-70'>
					<MdDeleteOutline
						size={30}
						className='cursor-pointer duration-200'
						onClick={deleteImage}
					/>
				</div>
			</Transition>
		</div>
	)
}
export default ImagePreview
