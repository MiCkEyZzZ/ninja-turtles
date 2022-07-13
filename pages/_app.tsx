import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import '@docsearch/css'
function TurtleApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default TurtleApp
