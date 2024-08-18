import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const SectionVariants = cva('space-y-6', {
  variants: {
    variant: {
      default: '',
      center: 'flex flex-col items-center justify-center text-center',
    },
    maxWidth: {
      default: '',
      prose: 'max-w-prose mx-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    maxWidth: 'default',
  },
})

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SectionVariants> {}

export function Section({
  className,
  variant,
  children,
  maxWidth,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(SectionVariants({ variant, maxWidth }), className)}
      {...props}
    >
      {children}
    </section>
  )
}
