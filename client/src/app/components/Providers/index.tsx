import { PropsWithChildren } from 'react'
import ReactQueryProvider from './React query'

const Providers = async ({ children }: PropsWithChildren) => (
	<ReactQueryProvider>{children}</ReactQueryProvider>
)

export default Providers
