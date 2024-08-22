import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ProjectProps } from '@/types'

const projectBySlugQuery = (slug: string) => `
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
  const response = await fetchHygraph(projectBySlugQuery(slug))
  const project: ProjectProps = response.project
  return project
}
