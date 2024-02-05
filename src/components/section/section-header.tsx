import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

interface SectionHeaderProps {
  sectionTitle: string
  description?: string
  withLink?: boolean
  linkHref?: string
  linkLabel?: string
  className?: string
}

export function SectionHeader({
  sectionTitle,
  description,
  withLink = false,
  linkHref,
  linkLabel,
  className,
}: SectionHeaderProps) {
  if (withLink) {
    return (
      <div
        className={cn(
          'flex w-full flex-col items-center justify-between sm:flex-row',
          className,
        )}
      >
        <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
          {sectionTitle}
        </h2>
        <Link className={buttonVariants({ variant: 'link' })} href={linkHref!}>
          {linkLabel} &rarr;
        </Link>
      </div>
    )
  }

  return (
    <div className={cn('text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
        {sectionTitle}
      </h2>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </div>
  )
}
