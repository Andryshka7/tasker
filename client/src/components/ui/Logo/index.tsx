import Image from 'next/image'
import Link from 'next/link'

const Logo = () => (
	<Link href='/'>
		<header className='ml-20 mt-20 flex items-center gap-2'>
			<Image width={60} height={60} src='/icon.png' alt=''></Image>
			<div className='flex flex-col items-center'>
				<h1 className='text-3xl font-bold'>Tasker</h1>
				<h4 className='text-sm font-semibold'>Stay effective</h4>
			</div>
		</header>
	</Link>
)

export default Logo
