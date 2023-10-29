import { ReactNode } from 'react'
import { Menu, AuthRedirector } from './components'
import { Logo } from '../components'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => (
    <AuthRedirector>
        <div className='flex'>
            <div>
                <Logo />
                <Menu />
            </div>
            <main>{children}</main>
        </div>
    </AuthRedirector>
)

export default Layout
