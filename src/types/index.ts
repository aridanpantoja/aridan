export type ProjectCardProps = {
  title: string
  slug: string
  shortDescription: string
  image: {
    url: string
  }
}

export type ProjectProps = {
  slug: string
  title: string
  shortDescription: string
  image: {
    url: string
  }
  github: string | null
  deploy: string | null
  longDescription: string
  maintenance: boolean
  skill: {
    text: string
  }[]
}

export type StackProps = {
  text: string
}[]

export type ExperienceProps = {
  title: string
  startDate: string
  endDate?: string
  local: string
  description: string
  image: {
    url: string
  }
  stack: StackProps
  category: 'education' | 'work'
}
