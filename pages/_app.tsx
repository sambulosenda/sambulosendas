import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
