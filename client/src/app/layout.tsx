import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Tasker',
    description: 'Stay effective'
}

const RootLayout = ({ children }: { children: ReactNode }) => (
    <html lang='en'>
        <body className={inter.className}>{children}</body>
    </html>
)

export default RootLayout
