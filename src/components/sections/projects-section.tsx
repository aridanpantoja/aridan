import { NavLink } from '@/components/common/nav-link'
import { ProjectCard } from '@/components/common/project-card'
import { Section } from '@/components/common/section'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { getProjectsQuery } from '@/querys'
import { ProjectCardProps } from '@/types/projects'
import { LuArrowRight } from 'react-icons/lu'

export async function ProjectsSection() {
  const response = await fetchHygraph(getProjectsQuery)
  const projects: ProjectCardProps[] = response.projects

  return (
    <Section>
      <h2>Projetos em destaque</h2>

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

        <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-foreground/30 bg-gradient-to-r from-primary to-primary/50 p-8 shadow-2xl md:p-14">
          <div className="w-full space-y-4 rounded-2xl bg-background p-6 shadow-2xl">
            <h3 className="text-2xl font-bold">
              Confira todos os projetos do meu portfólio aqui!
            </h3>
            <NavLink
              name="Ver todos projetos"
              Icon={LuArrowRight}
              href="/projetos"
              className="flex-row-reverse text-primary"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
