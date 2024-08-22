import { Section } from '@/components/common/section'
import { Skeleton } from '@/components/shadcn-ui/skeleton'

export default function ProjectsLoading() {
  return (
    <>
      <Section variant="center" maxWidth="prose">
        <Skeleton className="h-8 w-32" />

        <Skeleton className="h-8 w-full" />
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Skeleton className="h-96 sm:h-80" />
          <Skeleton className="h-96 sm:h-80" />
          <Skeleton className="h-96 sm:h-80" />
          <Skeleton className="h-96 sm:h-80" />
        </div>
      </Section>
    </>
  )
}
