import { Section } from '@/components/common/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { getProjectBySlug } from '@/querys'
import { ProjectProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaGithub, FaGlobe } from 'react-icons/fa6'

const imageCard = {
  width: 1280,
  height: 720,
}

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({
  params: { slug },
}: ProjectPageProps) {
  const response = await fetchHygraph(getProjectBySlug(slug))
  const project: ProjectProps = response.project

  if (!project) {
    return notFound()
  }

  return (
    <>
      <Section variant="center" maxWidth="prose">
        <h1>{project.title}</h1>

        <p className="text-lg">{project.shortDescription}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className={buttonVariants()}
            >
              <FaGithub className="mr-1" />
              Repositório
            </Link>
          )}
          {project.deploy && (
            <Link
              href={project.deploy}
              target="_blank"
              className={buttonVariants()}
            >
              <FaGlobe className="mr-1" />
              Ver projeto
            </Link>
          )}
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-2xl border">
          <Image
            src={project.image.url}
            width={imageCard.width}
            height={imageCard.height}
            alt={project.title}
            className="object-cover"
          />
        </div>
      </Section>

      <Section>
        <h2>Descrição</h2>

        <p>{project.longDescription}</p>

        <h2>Competências</h2>

        <ul className="list-inside list-disc">
          {project.skill.map((item, i) => (
            <li key={i}>{item.text}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
