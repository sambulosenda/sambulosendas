import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { RiSunFill } from 'react-icons/ri'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Default title' }: Props) => {
  return (
    <div className="max-w-screen-sm mx-auto px-6">
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
        <div className="py-20 flex text-lg text-gray-500">
          <div className="flex flex-grow space-x-3">
            <a
              href="https://twitter.com/kamebkj"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/kamebkj"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/khsiao"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <RiSunFill />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
