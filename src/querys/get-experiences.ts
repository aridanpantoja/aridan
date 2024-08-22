import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ExperienceProps } from '@/types'

const experiencesQuery = `
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
  const response = await fetchHygraph(experiencesQuery)
  const experiences: ExperienceProps[] = response.experiences
  return experiences
}
