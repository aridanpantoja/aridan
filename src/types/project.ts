import { CategoryProps } from './category'
import { TechnologyProps } from './technology'

export interface ProjectProps {
  title: string
  slug: string
  description: string
  shortDescription: string
  category: CategoryProps
  deployHref: string
  githubHref: string
  technologies: TechnologyProps[]
  thumbnail: {
    url: string
  }
}
