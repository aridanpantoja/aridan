import { Section } from '@/components/common/section'
import { Skeleton } from '@/components/shadcn-ui/skeleton'

export default function HomeLoading() {
  return (
    <>
      <Section variant="center" maxWidth="prose">
        <Skeleton className="size-20" />
        <Skeleton className="h-8 w-64" />

        <div className="flex flex-wrap justify-center gap-3">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-24" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-7 w-32" />

        <div className="space-y-2">
          <Skeleton className="h-6 w-10/12" />
          <Skeleton className="h-6 w-11/12" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="size-10" />
          <Skeleton className="size-10" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-7 w-56" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Skeleton className="h-96 sm:h-80" />
          <Skeleton className="h-96 sm:h-80" />
          <Skeleton className="h-96 sm:h-80" />
          <Skeleton className="h-96 sm:h-80" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-7 w-56" />

        <div className="grid grid-cols-1 gap-4">
          <Skeleton className="h-80 w-full sm:h-64" />
          <Skeleton className="h-80 w-full sm:h-64" />
          <Skeleton className="h-80 w-full sm:h-64" />
        </div>

        <Skeleton className="h-7 w-56" />
      </Section>
    </>
  )
}
