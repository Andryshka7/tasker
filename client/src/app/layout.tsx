import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { ReactQueryProvider } from '@/components/Providers'
import './index.css'

export const metadata: Metadata = {
	title: 'Tasker',
	description: 'Stay effective'
}

const RootLayout = ({ children }: PropsWithChildren) => (
	<html lang='en'>
		<head>
			<link rel='icon' href='/icon.png' />
		</head>
		<body className='bg-midnight tracking-wide text-white'>
			<ReactQueryProvider>{children}</ReactQueryProvider>
			<Toaster />
			<div id='portal' />
		</body>
	</html>
)

export default RootLayout
