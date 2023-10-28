import Image from 'next/image'
import icon from 'public/icon.png'

const Logo = () => (
    <div className='mx-20 my-14 flex items-center gap-2'>
        <Image width={60} height={60} src={icon} alt=''></Image>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold'>Tasker</h1>
            <h4 className='text-sm font-semibold'>Stay effective</h4>
        </div>
    </div>
)

export default Logo
