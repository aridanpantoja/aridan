import { getProjectBySlug } from '@/querys'
import { ProjectProps } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'
import { fetchHygraph } from './fetch-hygraph'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function constructMetadata(
  {
    title = 'Aridan Pantoja - Desenvolvedor Web',
    description = 'Desenvolvedor Web cursando Engenharia de Computação',
    slug = 'https://aridan.dev/',
    image = '/og.png',
    icons = '/favicon.ico',
  }: {
    title?: string
    description?: string
    slug?: string
    image?: string
    icons?: string
  } = {},
  context?: {
    params: { slug: string }
  },
): Promise<Metadata> {
  let dynamicTitle = title
  let dynamicDescription = description
  let dynamicImage = image
  let dynamicSlug = slug

  if (context?.params.slug) {
    const slug = context.params.slug
    const response = await fetchHygraph(getProjectBySlug(slug))
    const project: ProjectProps = response.project

    dynamicTitle = project.title || dynamicTitle
    dynamicDescription = project.shortDescription || dynamicDescription
    dynamicImage = project.image.url || dynamicImage
    dynamicSlug = `https://aridan.dev/projetos/${project.slug}` || dynamicSlug
  }

  return {
    title: dynamicTitle,
    description: dynamicDescription,
    openGraph: {
      title,
      description,
      images: [{ url: dynamicImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [dynamicImage],
      creator: '@iracema_ema',
    },
    icons,
    metadataBase: new URL(`https://aridan.dev/projetos/${dynamicSlug}`),
  }
}
