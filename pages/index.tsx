import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useTheme } from 'next-themes'

const IndexPage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Layout title="Home">
      <div className="text-3xl font-bold my-4 antialiased">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Hi there,
        </span>
      </div>
      <p className="text-base text-gray-700 antialiased dark:text-gray-200 transition-all">
        I’m Kate, a Product Designer who loves pattern finding and crafting
        functional and beautiful user experience. Obsessed with system thinking.
        A firm believer that API design is product design. Currently leading{' '}
        <a
          href="https://evergreen.segment.com"
          target="_blank"
          rel="noreferrer"
        >
          design system
        </a>{' '}
        at Segment.
        <br />
        <br />
        Check out some of{' '}
        <Link href="/projects">
          <a>my work</a>
        </Link>
        , learn more{' '}
        <Link href="/about">
          <a>about me</a>
        </Link>
        , or join me to the{' '}
        {theme === 'dark' ? (
          <a
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer"
          >
            bright
          </a>
        ) : (
          <a
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer"
          >
            dark
          </a>
        )}{' '}
        side if you are feeling up for it.
      </p>
      <p className="text-base text-gray-500 antialiased dark:text-gray-400 pt-20 -mb-5 transition-all">
        This site is handcrafted with 💜,{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        ,{' '}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          Tailwind
        </a>{' '}
        and deployed with{' '}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          Vercel
        </a>
        .
      </p>
    </Layout>
  )
}

export default IndexPage
