import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Default title' }: Props) => {
  return (
    <div className="max-w-screen-sm mx-auto px-6 bg-gray-50 dark:bg-gray-800">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="flex justify-between space-x-6 py-10 antialiased text-gray-500">
          <div className="flex-grow">
            <Link href="/">
              <a>Kate Hsiao</a>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <a>Work</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <div className="py-20">I am a footer </div>
      </footer>
    </div>
  )
}

export default Layout
