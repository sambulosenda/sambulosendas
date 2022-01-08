import React from 'react'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../components/Layout'

const Blog = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          {post.frontMatter.title}
        </Link>
      ))}
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