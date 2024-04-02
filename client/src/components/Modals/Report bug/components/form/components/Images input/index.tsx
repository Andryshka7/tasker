import { Dispatch, SetStateAction } from 'react'
import { TbFileUpload } from 'react-icons/tb'

import { ImagePreview } from './components'

interface Props {
	images: File[]
	setImages: Dispatch<SetStateAction<File[]>>
}

const ImagesInput = ({ images, setImages }: Props) => (
	<div className='mt-5 flex flex-wrap justify-center gap-2'>
		{images.map((image, index) => (
			<ImagePreview
				image={image}
				deleteImage={() => setImages((images) => images.filter((_, n) => n !== index))}
				key={index}
			/>
		))}
		<label
			htmlFor='images'
			className={`flex items-center justify-center rounded border-2 border-sky-300 ${
				images.length ? 'aspect-video w-24' : 'w-60 gap-3.5 px-5 py-3'
			}`}
		>
			<TbFileUpload size={30} className='text-sky-300' />
			{!images.length && <p className='font-medium'>Upload images</p>}
		</label>
		<input
			type='file'
			id='images'
			multiple
			accept='image/*'
			onChange={(e) => {
				setImages((images) => [...images, ...e.target.files!])
			}}
			hidden
		></input>
	</div>
)

export default ImagesInput
