import { Section } from '@/components/common/section'
import { Alert, AlertTitle } from '@/components/shadcn-ui/alert'
import { buttonVariants } from '@/components/shadcn-ui/button'
import { imageCard, siteConfig } from '@/config'
import { getProjectBySlug } from '@/querys/get-project-by-slug'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaGithub, FaGlobe } from 'react-icons/fa6'
import { TbAlertTriangleFilled } from 'react-icons/tb'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({
  params: { slug },
}: ProjectPageProps) {
  const project = await getProjectBySlug(slug)

  if (!project) {
    return notFound()
  }

  return (
    <>
      <Section variant="center" maxWidth="prose">
        <h1>{project.title}</h1>

        <p className="text-lg">{project.shortDescription}</p>

        {(project.deploy || project.github) && (
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        )}
        {project.maintenance && (
          <Alert variant="maintenance">
            <TbAlertTriangleFilled className="size-5" />
            <AlertTitle>Em desenvolvimento</AlertTitle>
          </Alert>
        )}
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

export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(slug)

  if (!project) {
    return notFound()
  }

  const title = project.title
  const description = project.shortDescription
  const imageUrl = project.image.url

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl }],
    },
    metadataBase: new URL(`${siteConfig.url}/projetos/${project.slug}`),
  }
}
