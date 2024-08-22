import { ProjectCard } from '@/components/common/project-card'
import { Section } from '@/components/common/section'
import { getProjects } from '@/querys/get-projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Explore alguns dos trabalhos que fiz. Sinta-se à vontade para navegar e descobrir mais sobre meus projetos.',
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <>
      <Section variant="center" maxWidth="prose">
        <h1>Projetos</h1>

        <p className="text-lg">
          Confira todos os projetos freelancers, pessoais e acadêmicos que já
          fiz e participei
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              imgUrl={project.image.url}
              imgAlt={project.title}
              title={project.title}
              slug={project.slug}
              description={project.shortDescription}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
