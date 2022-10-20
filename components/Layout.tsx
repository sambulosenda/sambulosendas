import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ModeToggle from './ModeToggle'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Default title' }: Props) => {
  const router = useRouter()

  return (
    <div className="max-w-screen-md mx-auto px-2">
      <Head>
        <title>Sambulo Senda</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="flex justify-between space-x-6 py-10 antialiased text-gray-500 dark:text-gray-400 transition-all">
          <div className="flex-grow">
            <Link href="/" passHref>
              <a className={router.pathname === '/' ? 'active' : ''}>
                Sambulo Senda{' '}
              </a>
            </Link>
          </div>
          <div>
            <Link href="/projects" passHref>
              <a className={router.pathname === '/projects' ? 'active' : ''}>
               Projects
              </a>
            </Link>
          </div>
          <div>
            <Link href="/about" passHref>
              <a className={router.pathname === '/about' ? 'active' : ''}>
                About
              </a>
            </Link>
          </div>
          {/* <div>
            <Link href="/blog" passHref>
              <a className={router.pathname === '/blog' ? 'active' : ''}>
                Blog
              </a>
            </Link>
          </div> */}
        </nav>
      </header>
      {children}
      <footer>
        <div className="py-20 flex text-lg text-gray-500">
          <div className="flex flex-grow space-x-3">
            <a
              href="https://twitter.com/sambulosenda"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/sambulosenda"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sambulosenda/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
