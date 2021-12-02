import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component
        {...pageProps}
        className="transition duration-500 ease-in-out"
      />
    </ThemeProvider>
  )
}
export default MyApp
