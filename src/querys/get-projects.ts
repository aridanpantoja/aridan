import { query } from '@/lib/apollo-client'
import { ProjectCardProps } from '@/types'
import { gql } from '@apollo/client'

const projectsQuery = gql`
  query GetProjects {
    projects {
      title
      slug
      shortDescription
      image {
        url
      }
    }
  }
`

export async function getProjects() {
  const { data } = await query({ query: projectsQuery })
  const projects: ProjectCardProps[] = data.projects
  return projects
}
