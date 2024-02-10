import { HeadSection } from '@/components/@pages/head-section'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { Skeleton } from '@/components/ui/skeleton'

export default function Blog() {
  return (
    <>
      <HeadSection
        title="Blog"
        description="Aqui, você pode explorar ideias, dicas e insights sobre uma variedade de tópicos relacionados com desenvolvimento."
      />

      <Section background="gray">
        <SectionHeader
          sectionTitle="Em desenvolvimento"
          description="Disponível em breve..."
        />
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-72 w-full rounded-md bg-secondary" />
          <div className="h-72 w-full rounded-md bg-secondary" />
          <div className="h-72 w-full rounded-md bg-secondary" />
        </div>
      </Section>
    </>
  )
}
