'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete, MdOutlineLibraryAdd } from 'react-icons/md'

import { Transition } from '@headlessui/react'

interface Props {
	avatar: File | string | null
	setAvatar: Dispatch<SetStateAction<File | string | null>>
}

const AvatarInput = ({ avatar, setAvatar }: Props) => {
	const [isHovering, setIsHovering] = useState(false)

	useEffect(() => {
		setIsHovering(false)
	}, [avatar])

	return (
		<>
			{avatar ? (
				<div
					className='relative h-40 w-40 rounded-full'
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
				>
					<img
						src={avatar instanceof File ? URL.createObjectURL(avatar) : avatar}
						className='absolute h-full w-full rounded-full object-cover'
					/>

					<Transition
						show={isHovering}
						enterFrom='opacity-0'
						className='duration-100'
						leaveTo='opacity-0'
					>
						<div className='absolute flex h-full w-full items-center justify-center gap-3 rounded-full bg-black bg-opacity-80'>
							<label htmlFor='avatar-input'>
								<AiFillEdit size={30} className='duration-200 hover:scale-110' />
							</label>

							<MdDelete
								size={30}
								onClick={() => setAvatar(null)}
								className='duration-200 hover:scale-110'
							/>
						</div>
					</Transition>
				</div>
			) : (
				<label
					htmlFor='avatar-input'
					className='flex h-40 w-40 cursor-pointer items-center justify-center rounded-full bg-neutral-500'
				>
					<MdOutlineLibraryAdd size={60} />
				</label>
			)}

			<input
				id='avatar-input'
				type='file'
				accept='image/*'
				hidden
				onChange={(e) => {
					const file = e.target.files && e.target.files[0]
					if (file) {
						setAvatar(file)
					}
				}}
			/>
		</>
	)
}
export default AvatarInput
