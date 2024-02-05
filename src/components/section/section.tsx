import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ReactNode } from 'react'

const SectionVariants = cva('relative py-20 overflow-hidden ', {
  variants: {
    background: {
      default: '',
      gray: 'bg-secondary/30 border-y',
    },
  },
  defaultVariants: {
    background: 'default',
  },
})

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SectionVariants> {
  className?: string
  enableBackground?: boolean
  children: ReactNode
}

export function Section({
  className,
  children,
  enableBackground = false,
  background,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(SectionVariants({ background }), className)}
      {...props}
    >
      {enableBackground && (
        <>
          <div className="circle-background-right"></div>
          <div className="circle-background-left"></div>
          <div className="grid-background"></div>
        </>
      )}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        {children}
      </div>
    </section>
  )
}
