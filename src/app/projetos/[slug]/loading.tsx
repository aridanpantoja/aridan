import { ProjectLoading } from '@/components/project/project-loading'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProjectLoadingPage() {
  return (
    <>
      <Section enableBackground>
        <div className="mx-auto flex max-w-prose flex-col items-center gap-4 py-20 text-center ">
          <Skeleton className="h-10 w-full sm:h-12 sm:w-[520px]" />
          <div className="flex w-full flex-col items-center gap-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          sectionTitle="Páginas & Seções"
          description="Veja as principais áreas desenvolvidas durante o projeto"
        />
        <ProjectLoading columns="three" className="mt-8" />
      </Section>
    </>
  )
}
