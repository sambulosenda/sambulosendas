import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Home">
      <h1 className="text-3xl font-bold my-4 antialiased text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600">
        Hi there,
      </h1>
      <p className="text-base text-gray-700 antialiased">
        I’m Kate, a Product Designer who loves pattern finding and crafting
        functional and beautiful user experience. Obsessed with system thinking
        and trying to apply different data model to the world. A firm believer
        that API design is product design. Currently leading design system at
        Segment.
        <br />
        <br />
        Check out some of{' '}
        <Link href="/projects">
          <a>my proudest work</a>
        </Link>
        , learn more{' '}
        <Link href="/about">
          <a>about me</a>
        </Link>
        , or join me to the dark side if you are feeling up for it.{' '}
      </p>
    </Layout>
  )
}

export default IndexPage
