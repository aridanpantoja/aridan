import { HeadSection } from '@/components/@pages/head-section'
import { ProjectGrid } from '@/components/project/project-grid'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { categoriesConfig } from '@/config/categories'

export default async function ProjetosPage() {
  return (
    <>
      <HeadSection
        title="Projetos"
        description="Aqui, você pode explorar alguns dos trabalhos que desenvolvi. Sinta-se à vontade para navegar e descobrir mais sobre meus projetos."
      />

      <Section background="gray">
        {categoriesConfig?.map((category, i) => (
          <div className="mb-8 flex flex-col items-center text-center" key={i}>
            <SectionHeader
              sectionTitle={category.name}
              className="mb-4 w-full text-start"
            />

            <ProjectGrid category={category.category} />
          </div>
        ))}
      </Section>
    </>
  )
}
