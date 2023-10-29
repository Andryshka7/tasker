import { ReactNode } from 'react'
import { Metadata } from 'next'
import ReduxProvider from 'redux-toolkit/provider'
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
        <body className='bg-secondary tracking-wide text-white'>
            <ReduxProvider>{children}</ReduxProvider>
        </body>
    </html>
)

export default RootLayout
