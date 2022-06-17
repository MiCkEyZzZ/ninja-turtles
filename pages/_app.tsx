import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import '../themes/prism-theme.css'

function TurtleApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default TurtleApp
