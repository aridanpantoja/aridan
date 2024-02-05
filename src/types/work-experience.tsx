import { TechnologyProps } from './technology'

export interface WorkExperienceProps {
  companyName: string
  role: string
  companyLogo: {
    url: string
  }
  description: string
  startDate: string
  endDate: string
  technologies: TechnologyProps[]
}
