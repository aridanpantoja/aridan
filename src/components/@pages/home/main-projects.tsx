import { ProjectGrid } from '@/components/project/project-grid'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'

export function MainProjects() {
  return (
    <Section background="gray">
      <div className="flex flex-col items-center gap-8 text-center">
        <SectionHeader
          sectionTitle="Projetos em Destaque"
          linkHref="/projetos"
          linkLabel="Ver projetos"
          withLink
        />

        <ProjectGrid category="main" />
      </div>
    </Section>
  )
}
