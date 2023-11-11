import { Metadata } from 'next'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = {
	title: 'Tasker',
	description: 'Stay effective'
}

interface Props {
	children: ReactNode
}

const RootLayout = ({ children }: Props) => (
	<html lang='en'>
		<head>
			<link rel='icon' href='/icon.png' />
		</head>
		<body className='bg-secondary tracking-wide text-white'>{children}</body>
	</html>
)

export default RootLayout
