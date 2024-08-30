import { query } from '@/lib/apollo-client'
import { ExperienceProps, ProjectCardProps, StackProps } from '@/types'
import { gql } from '@apollo/client'

const homeQuery = gql`
  query GetHome {
    home(where: { slug: "home" }) {
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
  const { data } = await query({ query: homeQuery })
  const home: HomeProps = data.home
  return home
}
