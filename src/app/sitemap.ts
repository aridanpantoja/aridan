import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ProjectProps } from '@/types/project'

export default async function sitemap() {
  const query = `
  query ProjectsSlug {
    projects(first: 100) {
      slug
    }
  }`

  const slugs: { projects: ProjectProps[] } = await fetchHygraph(query)
  const projects = slugs.projects.map((item) => {
    return {
      url: `https://aridan.dev/projetos/${item.slug}`,
      lastModified: new Date(),
    }
  })
  const pages = [
    {
      url: 'https://aridan.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://aridan.dev/projetos',
      lastModified: new Date(),
    },
    {
      url: 'https://aridan.dev/blog',
      lastModified: new Date(),
    },
    ...projects,
  ]

  return pages
}
