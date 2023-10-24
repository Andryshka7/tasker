import Link from 'next/link'

const Home = () => (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Link href='users'>
            <button className='bg-blue-500 px-8 py-1.5 font-semibold rounded-md'>Users</button>
        </Link>
    </main>
)

export default Home
