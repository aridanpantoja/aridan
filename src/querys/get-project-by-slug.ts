import { query } from '@/lib/apollo-client'
import { ProjectProps } from '@/types'
import { gql } from '@apollo/client'

const projectBySlugQuery = (slug: string) => gql`
  query GetProjectBySlug {
    project(where: {slug: "${slug}"}) {
      title
      shortDescription
      slug
      image {
        url
      }
      github
      deploy
      longDescription
      maintenance
      skill {
        text
      }
    }
  }
`

export async function getProjectBySlug(slug: string) {
  const { data } = await query({ query: projectBySlugQuery(slug) })
  const project: ProjectProps = data.project
  return project
}
