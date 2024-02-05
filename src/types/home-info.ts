import { SocialProps } from './social'
import { TechnologyProps } from './technology'
import { WorkExperienceProps } from './work-experience'

export interface homeInfoProps {
  introduction: string
  technologies: TechnologyProps[]
  profilePicture: {
    url: string
  }
  socials: SocialProps[]
  workExperiences: WorkExperienceProps[]
}
