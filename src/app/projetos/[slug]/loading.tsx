import { Section } from '@/components/common/section'
import { Skeleton } from '@/components/shadcn-ui/skeleton'

export default function ProjectLoading() {
  return (
    <>
      <Section variant="center" maxWidth="prose">
        <Skeleton className="h-10 w-96" />

        <div className="flex w-full flex-col items-center justify-center gap-1">
          <Skeleton className="h-6 w-10/12" />
          <Skeleton className="h-6 w-8/12" />
        </div>

        <div className="flex w-full items-center justify-center gap-3">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-[420px] rounded-2xl" />
      </Section>

      <Section>
        <Skeleton className="h-7 w-32" />

        <div className="space-y-2">
          <Skeleton className="h-6 w-10/12" />
          <Skeleton className="h-6 w-11/12" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-11/12" />
        </div>
      </Section>

      <Section>
        <Skeleton className="h-7 w-40" />

        <ul className="space-y-2">
          <Skeleton className="h-6 w-7/12" />
          <Skeleton className="h-6 w-6/12" />
          <Skeleton className="h-6 w-6/12" />
          <Skeleton className="h-6 w-8/12" />
        </ul>
      </Section>
    </>
  )
}
