import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
    icon: IconType
    title: string
    to: string
}

const MenuItem = ({ icon: ReactIcon, title, to }: Props) => (
    <div className='mt-0.5 flex items-center gap-1.5 rounded px-2 duration-200 hover:bg-white hover:bg-opacity-20'>
        <ReactIcon size={20} />
        <Link className='text-lg font-bold' href={to}>
            {title}
        </Link>
    </div>
)
export default MenuItem
