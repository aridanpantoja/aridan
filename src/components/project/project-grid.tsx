import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Suspense } from 'react'
import { ProjectLoading } from './project-loading'
import { ProjectList } from './project-list'

const ProjectGridVariants = cva(
  'grid w-full grid-cols-1 gap-4 sm:grid-cols-2',
  {
    variants: {
      columns: {
        default: '',
        three: 'lg:grid-cols-3',
      },
    },
    defaultVariants: {
      columns: 'default',
    },
  },
)

interface ProjectGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProjectGridVariants> {
  category: string
}

export async function ProjectGrid({
  category,
  columns,
  className,
  ...props
}: ProjectGridProps) {
  return (
    <Suspense fallback={<ProjectLoading columns={columns} />}>
      <div
        className={cn(ProjectGridVariants({ columns }), className)}
        {...props}
      >
        <ProjectList category={category} />
      </div>
    </Suspense>
  )
}
