import React from 'react'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../components/Layout'

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div className="my-5 flex flex-col	">
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <h1 className="text-base hover:underline text-gray-700 antialiased dark:text-gray-200 transition-all">
              {post.frontMatter.title}
            </h1>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blog
