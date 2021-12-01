import { GetStaticProps } from 'next'
import { Project } from '../../interfaces'
import { projectData } from '../../utils/project-data'
import Layout from '../../components/Layout'
import ListItem from '../../components/ListItem'

type Props = {
  items: Project[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Work">
    <h1 className="text-3xl font-bold my-4">Work</h1>
    {items.map((item) => (
      <ListItem key={item.id} data={item} />
    ))}
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Project[] = projectData
  return { props: { items } }
}

export default WithStaticProps
