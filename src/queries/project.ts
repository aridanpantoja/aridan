import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ProjectProps } from '@/types/project'

const query = (slug: string) => {
  return `query ProjectPage {
    project(where: {slug: "${slug}"}) {
      title
      slug
      shortDescription
      thumbnail {
        url
      }
      technologies {
        name
        icon
      }
      description
      deployHref
      githubHref
    }
  }  
  `
}

export interface getProjectProps {
  project: ProjectProps
}

export async function getProject({
  slug,
}: {
  slug: string
}): Promise<getProjectProps> {
  return fetchHygraph(query(slug))
}
