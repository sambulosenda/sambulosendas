import React from 'react'
import Link from 'next/link'
import { Project } from '../interfaces'

type Props = {
  data: Project
}

const ListItem = ({ data }: Props) => {
  return (
    <div className="mb-16">
      <img src={`${data.image}`} alt={`${data.id}`} />
      <h3 className="text-base font-bold text-gray-700 antialiased">
        {data.title}
      </h3>
      <p>{data.description}</p>
      <Link href="/projects/[id]" as={`/projects/${data.id}`}>
        <a>Link</a>
      </Link>
    </div>
  )
}

export default ListItem
