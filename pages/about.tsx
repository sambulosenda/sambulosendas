import React from 'react'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout title="About">
      <h1 className="text-3xl font-bold my-4 antialiased text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
        A bit more about Kate
      </h1>
      <p className="text-base text-gray-700 antialiased">
        Currently design system at Segment, previously platform design at
        Segment, and designed IT products at Splunk. A developer in my previous
        life, while I still mess around with code to build prototypes to tell a
        good story from time to time. You can find my resume at{' '}
        <a href="https://read.cv/kamebkj" target="_blank" rel="noreferrer">
          read.cv/kamebkj
        </a>{' '}
        or if you prefer a{' '}
        <a href="https://read.cv/kamebkj" target="_blank" rel="noreferrer">
          pdf
        </a>{' '}
        version.
        <br />
        <br />
        After focusing on product design for some time, I find my passion in
        design systems and building tools to empower designers and engineers to
        do their best work. It is not too different from building a product that
        helps a specific persona to accomplish their goal, but with system
        design, I get to build the muscle of thinking more horizontally and
        finding patterns in the design problem.
        <br />
        <br />I love surrounding myself with a group of people who are
        passionate about design systems and have a constant debate about the
        right altitude to focus on, from setting the vision to pushing pixels,
        from creating the components to creating the process for others to
        contribute to. There are challenges at all stages and that is what makes
        system design fun. In my spare time, I try to write more but have not
        been super successful. Probably spend too much time in Zelda and Animal
        Crossing these days. Use hiking as my meditation approach. <br />
        <br />
        Based in the Bay Area, have a special heart for Seattle, and still call
        Taipei my home where most of my family is at.
      </p>
    </Layout>
  )
}

export default AboutPage
