import React from 'react'
import { Project } from '../interfaces'
import { FiArrowUpRight } from 'react-icons/fi'

type Props = {
  data: Project
}

const ListItem = ({ data }: Props) => {
  return (
    <div className="mb-16">
      <img src={`${data.image}`} alt={`${data.id}`} className="mb-4" />
      <div className="text-base font-medium text-gray-800 antialiased mb-1 flex items-center">
        <a
          href={`${data.url}`}
          target="_blank"
          rel="noreferrer"
          className="h-6"
        >
          {data.title}
        </a>
        <FiArrowUpRight className="ml-1 -mb-0.5" />
      </div>
      <p className="text-base text-gray-700 antialiased">{data.description}</p>
      {/* <Link href="/projects/[id]" as={`/projects/${data.id}`}>
        <a>Link</a>
  </Link> */}
    </div>
  )
}

export default ListItem
