import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'
import { FaCodeBranch, FaGithub, FaLinkedin } from 'react-icons/fa'

interface LinkItemProps {
  label: string
  Icon: LucideIcon | IconType
  href: string
}

interface LinksConfigProps {
  mainNav: LinkItemProps[]
  mobileNav: LinkItemProps[]
}

export const pages: LinkItemProps[] = [
  {
    label: 'Projetos',
    Icon: FaCodeBranch,
    href: '/projetos',
  },
]

export const social: LinkItemProps[] = [
  {
    label: 'Github',
    Icon: FaGithub,
    href: 'https://github.com/aridanpantoja',
  },
  {
    label: 'Linkedin',
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/aridanpantoja',
  },
]

export const linksConfig: LinksConfigProps = {
  mainNav: pages,
  mobileNav: pages.concat(social),
}
