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
  skill: {
    text: string
  }[]
}
