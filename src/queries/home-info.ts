import { fetchHygraph } from '@/lib/fetch-hygraph'
import { homeInfoProps } from '@/types/home-info'

const query = `query Assets {
  page(where: {slug: "home"}) {
    introduction
    profilePicture {
      url
    }
    socials {
      icon
      name
      url
    }
    technologies {
      icon
      name
    }
  }
  workExperiences {
    companyLogo {
      url
    }
    companyName
    description
    endDate
    startDate
    technologies {
      icon
      name
    }
    role
  }
}`

export interface getHomeDataProps {
  page: homeInfoProps
}

export async function getHomeData(): Promise<getHomeDataProps> {
  return fetchHygraph(query)
}
