import { IconHygraph } from '@/components/icon-hygraph'
import { Section } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getProject } from '@/queries/project'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CiGlobe } from 'react-icons/ci'
import { TbBrandGithub } from 'react-icons/tb'

interface ProjetoPageProps {
  params: {
    slug: string
  }
}

export default async function ProjetoPage({
  params: { slug },
}: ProjetoPageProps) {
  const { project } = await getProject({ slug })

  if (!project) {
    return notFound()
  }

  return (
    <>
      <Section enableBackground>
        <div className="mx-auto flex max-w-prose flex-col items-center gap-4 py-20 text-center ">
          <h1 className="text-4xl font-extrabold tracking-tight text-accent-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {project.technologies.map((item, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="inline-flex gap-1 rounded-sm p-2 text-sm"
              >
                <IconHygraph icon={item.icon} />
                {item.name}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {project.deployHref && (
              <Button asChild>
                <Link href={project.deployHref} target="__blank">
                  <CiGlobe className="mr-1 text-2xl" />
                  Ver projeto
                </Link>
              </Button>
            )}
            {project.githubHref && (
              <Button asChild>
                <Link href={project.githubHref} target="__blank">
                  <TbBrandGithub className="mr-1 text-2xl" />
                  Repositório
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div>oi</div>
      </Section>
    </>
  )
}
