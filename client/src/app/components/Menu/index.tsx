import { HiMenu } from 'react-icons/hi'
import { LuCalendarRange } from 'react-icons/lu'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { MdOutlineCloudDone } from 'react-icons/md'
import { AiFillBug } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import { BiSolidEdit, BiHelpCircle, BiMessageSquareAdd } from 'react-icons/bi'

import { Search, MenuItem, SignOut } from './components'

const Menu = () => (
    <div className='absolute top-1/2 w-72 -translate-y-1/2 rounded-r-lg bg-primary px-8 py-4'>
        <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Menu</h2>
            <HiMenu size={30} />
        </div>
        <Search />
        <h3 className='mt-4 text-xs font-bold'>TASKS</h3>
        <div className='my-1'>
            <MenuItem icon={LuCalendarRange} title='Task list' to='/' />
            <MenuItem icon={FaRegCalendarCheck} title='My tasks' to='/' />
            <MenuItem icon={MdOutlineCloudDone} title='Completed' to='/' />
            <MenuItem icon={BiMessageSquareAdd} title='Create task' to='/' />
        </div>
        <h3 className='mt-4 text-xs font-bold'>TEAM</h3>
        <div className='my-1'>
            <MenuItem icon={BsPeopleFill} title='Team' to='/' />
            <MenuItem icon={BiSolidEdit} title='Edit team' to='/' />
        </div>
        <h3 className='mt-4 text-xs font-bold'>TOOLS</h3>
        <div className='my-1'>
            <MenuItem icon={BiHelpCircle} title='About tasker' to='/' />
            <MenuItem icon={AiFillBug} title='Report a bug' to='/' />
        </div>
        <SignOut />
    </div>
)

export default Menu
