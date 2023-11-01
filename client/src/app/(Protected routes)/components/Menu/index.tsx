'use client'

import { HiMenu } from 'react-icons/hi'
import { LuCalendarRange } from 'react-icons/lu'
import { RiFileListLine } from 'react-icons/ri'
import { TbSquareCheck } from 'react-icons/tb'
import { AiFillBug } from 'react-icons/ai'
import { IoPeopleSharp } from 'react-icons/io5'
import { BiMessageSquareEdit, BiHelpCircle, BiMessageSquareAdd } from 'react-icons/bi'

import { Search, MenuItem, SignOut } from './components'

const Menu = () => {
    return (
        <menu className='w-64 mt-20 rounded-r-lg bg-primary px-8 py-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold'>Menu</h2>
                <HiMenu size={25} />
            </div>
            <Search />
            <h3 className='mt-4 text-xs font-bold'>TASKS</h3>
            <div className='my-1'>
                <MenuItem icon={LuCalendarRange} title='Task list' to='/' />
                <MenuItem icon={RiFileListLine} title='My tasks' to='/my-tasks' />
                <MenuItem icon={TbSquareCheck} title='Completed' to='/completed' />
                <MenuItem icon={BiMessageSquareAdd} title='Create task' to='/' />
            </div>
            <h3 className='mt-4 text-xs font-bold'>TEAM</h3>
            <div className='my-1'>
                <MenuItem icon={IoPeopleSharp} title='Team' to='/team' />
                <MenuItem icon={BiMessageSquareEdit} title='Edit team' to='/edit-team' />
            </div>
            <h3 className='mt-4 text-xs font-bold'>TOOLS</h3>
            <div className='my-1'>
                <MenuItem icon={BiHelpCircle} title='About tasker' to='/about' />
                <MenuItem icon={AiFillBug} title='Report a bug' to='/' />
            </div>
            <SignOut />
        </menu>
    )
}

export default Menu
