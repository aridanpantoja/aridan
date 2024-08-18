import { ProjectCard } from '@/components/common/project-card'
import { Section } from '@/components/common/section'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { getProjectsQuery } from '@/querys'
import { ProjectCardProps } from '@/types/projects'

export default async function Projects() {
  const response = await fetchHygraph(getProjectsQuery)
  const projects: ProjectCardProps[] = response.projects

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
            />
          ))}
        </div>
      </Section>
    </>
  )
}
