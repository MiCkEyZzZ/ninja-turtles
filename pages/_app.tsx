import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../themes/prism-theme.css'
import '../styles/globals.css'

function TurtleApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default TurtleApp
