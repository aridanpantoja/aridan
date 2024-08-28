import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa6'

export const siteConfig = {
  name: 'Aridan Pantoja',
  url: 'https://aridan.dev',
  ogImage: 'https://aridan.dev/og.jpg',
  description:
    'Explore os meus projetos, habilidades, formações e veja como transformo ideias em soluções criativas e funcionais.',
}

export const imageCard = {
  width: 1280,
  height: 720,
}

export const PAGES = [
  {
    href: '/projetos',
    name: 'Projetos',
  },
  {
    href: '/curriculo',
    name: 'Currículo',
  },
]

export const SOCIALS = [
  {
    href: 'https://www.linkedin.com/in/aridanpantoja/',
    Icon: FaLinkedin,
    name: 'aridanpantoja',
    ariaLabel: 'Ir para o Linkedin',
  },
  {
    href: 'https://github.com/aridanpantoja/',
    Icon: FaGithub,
    name: 'aridanpantoja',
    ariaLabel: 'Ir para o Github',
  },
  {
    href: 'https://www.instagram.com/aridan.dev/',
    Icon: FaInstagram,
    name: 'aridan.dev',
    ariaLabel: 'Ir para o Instagram',
  },
  {
    href: 'https://medium.com/@aridanpantoja',
    Icon: FaMedium,
    name: 'aridanpantoja',
    ariaLabel: 'Ir para o Medium',
  },
]
