import * as React from 'react'

import { Project } from '../interfaces'

type ListDetailProps = {
  item: Project
}

const ListDetail = ({ item: project }: ListDetailProps) => (
  <div>
    <h1>Detail for {project.title}</h1>
    <p>ID: {project.id}</p>
  </div>
)

export default ListDetail
