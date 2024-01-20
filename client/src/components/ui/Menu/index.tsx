'use client'

import { AiFillBug } from 'react-icons/ai'
import { BiHelpCircle, BiMessageSquareAdd, BiMessageSquareEdit } from 'react-icons/bi'
import { FaSignOutAlt } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { IoPeopleSharp } from 'react-icons/io5'
import { LuCalendarRange } from 'react-icons/lu'
import { RiFileListLine } from 'react-icons/ri'
import { TbSquareCheck } from 'react-icons/tb'

import { useAuth } from '@/hooks'
import { useSignOut } from '@/hooks/api-communication/auth'
import { useCreateTaskModal } from '@/hooks/modals'

import { MenuItem } from './components'

const Menu = () => {
	const { data: me } = useAuth()
	const { open: openCreateTaskModal } = useCreateTaskModal()

	const signOut = useSignOut()

	return (
		<menu className='mt-20 w-64 rounded-r-lg bg-blue px-8 py-4'>
			<div className='flex items-center justify-between'>
				<h2 className='text-xl font-bold'>Menu</h2>
				<HiMenu size={25} />
			</div>
			<h3 className='mt-4 text-xs font-bold'>TASKS</h3>
			<div className='my-1'>
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
			<div className='my-1'>
				<MenuItem icon={IoPeopleSharp} title='Team' to='/team' />
				{me!.role !== 'user' && (
					<MenuItem icon={BiMessageSquareEdit} title='Edit team' to='/edit-team' />
				)}
			</div>
			<h3 className='mt-4 text-xs font-bold'>TOOLS</h3>
			<div className='my-1'>
				<MenuItem icon={BiHelpCircle} title='About tasker' to='/about' />
				<MenuItem icon={AiFillBug} title='Report a bug' action={() => {}} />
			</div>
			<div
				className='mx-auto mb-3 mt-7 flex w-fit cursor-pointer items-center gap-2'
				onClick={signOut}
			>
				<FaSignOutAlt size={20} />
				<h3 className='font-bold'>Sign out</h3>
			</div>
		</menu>
	)
}

export default Menu
