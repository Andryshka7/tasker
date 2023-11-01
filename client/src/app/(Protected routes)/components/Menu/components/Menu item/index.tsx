'use client'

import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
    icon: IconType
    title: string
    action?: () => void
    to: string
}

const MenuItem = ({ icon: ReactIcon, title, action, to }: Props) => (
    <Link
        className='mt-0.5 flex cursor-pointer items-center gap-1.5 rounded px-2 duration-200 hover:bg-white hover:bg-opacity-20'
        href={to}
        onClick={action}
    >
        <ReactIcon size={20} />
        <h2 className='font-bold'>{title}</h2>
    </Link>
)
export default MenuItem
