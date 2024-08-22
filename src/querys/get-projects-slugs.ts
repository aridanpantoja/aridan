import { fetchHygraph } from '@/lib/fetch-hygraph'

const projectsSlugsQuery = `
query MyQuery {
  projects {
    slug
  }
}
`

export async function getProjectsSlugs() {
  const response = await fetchHygraph(projectsSlugsQuery)
  const slugs: { slug: string }[] = response.projects
  return slugs
}
