import React from 'react'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="text-3xl font-bold my-4 antialiased">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
          A bit more about Sambulo
        </span>
      </div>
      <p className="text-base text-gray-700 antialiased dark:text-gray-200 transition-all">
        I enjoy bringing ideas to life through code. I'm passionate about
        everything frontend & design related, and I put emphasis on UX and
        accessibility. I'm constantly learning new skills and technologies, and
        tinkering with them.
        <br />
        <br />I love surrounding myself with a group of people who are
        passionate about design systems and having constant debates about the
        right altitude to focus on: from setting the vision to pushing pixels,
        from creating components to creating the process to empowering others.
        There are challenges at all stages and that is what makes system design
        fun.
      </p>
    </Layout>
  )
}

export default AboutPage
