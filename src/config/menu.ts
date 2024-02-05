import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'
import {
  FaCodeBranch,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegAddressBook,
} from 'react-icons/fa'
import { FaRegNewspaper } from 'react-icons/fa6'

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
  {
    label: 'Currículo',
    Icon: FaRegAddressBook,
    href: '/curriculo',
  },
  {
    label: 'Blog',
    Icon: FaRegNewspaper,
    href: '/blog',
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
    href: 'https://www.linkedin.com/in/aridan-pantoja',
  },
  {
    label: 'Instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/aridannnn',
  },
]

export const linksConfig: LinksConfigProps = {
  mainNav: pages,
  mobileNav: pages.concat(social),
}
