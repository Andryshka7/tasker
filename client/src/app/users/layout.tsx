import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <h1>Navbar</h1>
            {children}
            <h1>Footer</h1>
        </div>
    )
}
export default Layout
