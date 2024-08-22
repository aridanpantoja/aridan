import { siteConfig } from '@/config'
import { getProjectsSlugs } from '@/querys/get-projects-slugs'
import type { MetadataRoute } from 'next'

async function sitemapProjects() {
  const slugs = await getProjectsSlugs()
  const sitemapItems = slugs.map((item) => {
    return {
      url: `${siteConfig.url}/projetos/${item.slug}`,
      lastModified: new Date(),
    }
  })
  return sitemapItems
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await sitemapProjects()

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/projetos`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/curriculo`,
      lastModified: new Date(),
    },
    ...projects,
  ]
}
