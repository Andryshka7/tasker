import { ReactNode } from 'react'
import { Metadata } from 'next'
import './index.css'

export const metadata: Metadata = {
    title: 'Tasker',
    description: 'Stay effective'
}

const RootLayout = ({ children }: { children: ReactNode }) => (
    <html lang='en'>
        <head>
            <link rel='icon' href='/icon.png' />
        </head>
        <body className='bg-secondary tracking-wide text-white'>{children}</body>
    </html>
)

export default RootLayout
