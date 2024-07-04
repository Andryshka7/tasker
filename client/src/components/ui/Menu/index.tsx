'use client'

import { useState } from 'react'
import { AiFillBug } from 'react-icons/ai'
import { BiHelpCircle, BiMessageSquareAdd, BiMessageSquareEdit } from 'react-icons/bi'
import { FaSignOutAlt } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoPeopleSharp } from 'react-icons/io5'
import { LuCalendarRange } from 'react-icons/lu'
import { RiFileListLine } from 'react-icons/ri'
import { TbSquareCheck } from 'react-icons/tb'

import { useAuth } from '@/hooks'
import { useSignOut } from '@/hooks/api-communication/auth'
import { useCreateTaskModal, useReportBugModal } from '@/hooks/modals'

import { MenuItem } from './components'

const Menu = () => {
	const [isOpen, setIsOpen] = useState(true)

	const { data: me } = useAuth()
	const { open: openCreateTaskModal } = useCreateTaskModal()
	const { open: openReportBugModal } = useReportBugModal()

	const signOut = useSignOut()

	return (
		<>
			<button
				className={`menu-open-button absolute top-1/2 flex h-20 w-5 -translate-y-1/2 items-center justify-center rounded-r-xl bg-blue`}
				onClick={() => setIsOpen(true)}
			>
				<IoIosArrowForward />
			</button>

			<menu
				className={`absolute top-1/4 w-64 rounded-r-lg bg-blue px-8 py-4 duration-200 ${
					!isOpen && '-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-bold'>Menu</h2>
					<HiMenu size={25} className='cursor-pointer' onClick={() => setIsOpen(false)} />
				</div>

				<h3 className='mt-5 text-xs font-bold'>TASKS</h3>
				<div className='my-1.5'>
					<MenuItem icon={LuCalendarRange} title='Task list' to='/' />
					<MenuItem icon={RiFileListLine} title='My tasks' to='/my-tasks' />
					<MenuItem icon={TbSquareCheck} title='Completed' to='/completed' />
					<MenuItem
						icon={BiMessageSquareAdd}
						title='Create task'
						action={openCreateTaskModal}
					/>
				</div>

				<h3 className='mt-4 text-xs font-bold'>TEAM</h3>
				<div className='my-1.5'>
					<MenuItem icon={IoPeopleSharp} title='Team' to='/team' />
					{me?.role !== 'user' && (
						<MenuItem icon={BiMessageSquareEdit} title='Edit team' to='/edit-team' />
					)}
				</div>

				<h3 className='mt-4 text-xs font-bold'>TOOLS</h3>
				<div className='my-1.5'>
					<MenuItem icon={BiHelpCircle} title='About tasker' to='/about' />
					<MenuItem icon={AiFillBug} title='Report a bug' action={openReportBugModal} />
				</div>

				<div
					className='mx-auto mb-3 mt-7 flex w-fit cursor-pointer items-center gap-2'
					onClick={signOut}
				>
					<FaSignOutAlt size={20} />
					<h3 className='font-bold'>Sign out</h3>
				</div>
			</menu>
		</>
	)
}

export default Menu
