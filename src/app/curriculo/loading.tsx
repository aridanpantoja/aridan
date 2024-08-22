import { Section } from '@/components/common/section'
import { Skeleton } from '@/components/shadcn-ui/skeleton'

export default function ResumeLoading() {
  return (
    <>
      <Section variant="center" maxWidth="prose">
        <Skeleton className="size-20" />
        <Skeleton className="h-8 w-64" />

        <div className="flex flex-wrap justify-center gap-3">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-7 w-56" />

        <div className="grid grid-cols-1 gap-4">
          <Skeleton className="h-80 w-full sm:h-64" />
          <Skeleton className="h-80 w-full sm:h-64" />
          <Skeleton className="h-80 w-full sm:h-64" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-7 w-56" />

        <div className="grid grid-cols-1 gap-4">
          <Skeleton className="h-80 w-full sm:h-64" />
          <Skeleton className="h-80 w-full sm:h-64" />
          <Skeleton className="h-80 w-full sm:h-64" />
        </div>
      </Section>
    </>
  )
}
