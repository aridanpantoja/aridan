import { PageProps } from '@/interfaces/page'
import { FaMedium } from 'react-icons/fa6'
import { LuInstagram, LuLinkedin, LuPalette, LuPaperclip } from 'react-icons/lu'

export const PAGES: PageProps[] = [
  {
    href: '/projetos',
    Icon: LuPalette,
    name: 'Projetos',
  },
  {
    href: '/curriculo',
    Icon: LuPaperclip,
    name: 'Currículo',
  },
]

export const SOCIALS = [
  {
    href: 'https://www.linkedin.com/in/aridanpantoja/',
    Icon: LuLinkedin,
    name: 'aridanpantoja',
  },
  {
    href: 'https://www.instagram.com/aridan.dev/',
    Icon: LuInstagram,
    name: 'aridan.dev',
  },
  {
    href: 'https://medium.com/@aridanpantoja',
    Icon: FaMedium,
    name: 'aridanpantoja',
  },
]
