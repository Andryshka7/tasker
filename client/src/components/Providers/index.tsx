import { PropsWithChildren } from 'react'
import ReactQueryProvider from './React query provider'
import DataProvider from './Data provider'

const Providers = async ({ children }: PropsWithChildren) => (
	<ReactQueryProvider>
		<DataProvider>{children}</DataProvider>
	</ReactQueryProvider>
)

export default Providers
