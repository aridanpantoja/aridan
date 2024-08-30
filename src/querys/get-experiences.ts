import { query } from '@/lib/apollo-client'
import { ExperienceProps } from '@/types'
import { gql } from '@apollo/client'

const experiencesQuery = gql`
  query GetExperiences {
    experiences(orderBy: endDate_DESC) {
      category
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
`

export async function getExperiences() {
  const { data } = await query({ query: experiencesQuery })
  const experiences: ExperienceProps[] = data.experiences
  return experiences
}
