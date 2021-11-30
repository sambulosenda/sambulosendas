import React from 'react'
import Link from 'next/link'
import { Project } from '../interfaces'

type Props = {
  data: Project
}

const ListItem = ({ data }: Props) => {
  return (
    <div>
      <img src={`${data.image}`} alt={`${data.id}`} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Link href="/projects/[id]" as={`/projects/${data.id}`}>
        <a>Link</a>
      </Link>
    </div>
  )
}

export default ListItem
