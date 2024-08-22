import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ProjectCardProps } from '@/types'

const projectsQuery = `
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
  const response = await fetchHygraph(projectsQuery)
  const projects: ProjectCardProps[] = response.projects
  return projects
}
