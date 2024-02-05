import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ProjectProps } from '@/types/project'
import { ProjectCard } from './project-card'

interface ProjectListProps {
  category: string
}

export async function ProjectList({ category }: ProjectListProps) {
  function getProjects(): Promise<{ projects: ProjectProps[] }> {
    const query = `
    query ProjectList {
        projects(where: {category_contains_some: ${category}}) {
          title
          slug
          shortDescription
          thumbnail {
            url
          }
          technologies {
            name
          }
        }
    }`

    return fetchHygraph(query)
  }

  const { projects } = await getProjects()

  return projects.map((item, i) => (
    <ProjectCard
      key={i}
      title={item.title}
      slug={item.slug}
      thumbnail={item.thumbnail.url}
      shortDescription={item.shortDescription}
      technologies={item.technologies}
    />
  ))
}
