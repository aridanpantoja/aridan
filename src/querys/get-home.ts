import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ExperienceProps, ProjectCardProps, StackProps } from '@/types'

const homeQuery = `
query GetHome {
  home(where: {slug: "home"}) {
    description
    projects(first: 5) {
      slug
      title
      shortDescription
      image {
        url
      }
    }
    stack {
      text
    }
    currentPosition {
      title
      startDate
      endDate
      local
      description
      image {
        url
      }
      stack {
        text
      }
    }
    academicEducation {
      title
      startDate
      endDate
      local
      description
      image {
        url
      }
      stack {
        text
      }
    }
    supplementaryEducation {
      title
      startDate
      endDate
      local
      description
      image {
        url
      }
      stack {
        text
      }
    }
  }
}
`

type HomeProps = {
  description: string
  projects: ProjectCardProps[]
  stack: StackProps
  currentPosition: ExperienceProps
  academicEducation: ExperienceProps
  supplementaryEducation: ExperienceProps
}

export async function getHome() {
  const response = await fetchHygraph(homeQuery)
  const home: HomeProps = response.home
  return home
}
