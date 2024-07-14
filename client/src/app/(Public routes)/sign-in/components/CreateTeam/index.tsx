'use client'

import { useCreateTeamModal } from '@/hooks/modals'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

const CreateTeamButton = () => {
	const { open } = useCreateTeamModal()

	const [isHovering, setIsHovering] = useState(false)

	return (
		<div
			className={`absolute bottom-10 right-20 h-16 cursor-pointer overflow-hidden rounded-full bg-blue duration-200 ${
				isHovering ? 'w-48 hover:px-1' : 'w-16'
			}`}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onClick={open}
		>
			<div className='flex w-fit items-center'>
				<div className={`flex h-16 w-16 items-center justify-center`}>
					<FaPlus size={27} />
				</div>
				<h2
					className={`w-28 text-center text-lg font-semibold duration-200 ${
						isHovering ? '-translate-x-2' : ''
					}`}
				>
					Create team
				</h2>
			</div>
		</div>
	)
}
export default CreateTeamButton
