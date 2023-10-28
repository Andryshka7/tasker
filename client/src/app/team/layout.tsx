import { Menu, Logo } from 'app/components'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
    <main>
        <Logo />
        <Menu />
        <div className='ml-80'>{children}</div>
    </main>
)

export default Layout
