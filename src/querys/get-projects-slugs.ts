import { query } from '@/lib/apollo-client'
import { gql } from '@apollo/client'

const projectsSlugsQuery = gql`
  query MyQuery {
    projects {
      slug
    }
  }
`

export async function getProjectsSlugs() {
  const { data } = await query({ query: projectsSlugsQuery })
  const slugs: { slug: string }[] = data.projects
  return slugs
}
