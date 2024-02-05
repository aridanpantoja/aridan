import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Skeleton } from '../ui/skeleton'

const ProjectLoadingVariants = cva(
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

interface ProjectListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProjectLoadingVariants> {}

function CardSkeleton() {
  return <Skeleton className="h-[420px] w-full sm:h-96" />
}

export function ProjectLoading({
  columns,
  className,
  ...props
}: ProjectListProps) {
  return (
    <div
      className={cn(ProjectLoadingVariants({ columns }), className)}
      {...props}
    >
      <CardSkeleton />
      <CardSkeleton />
      {columns === 'three' && <CardSkeleton />}
    </div>
  )
}
