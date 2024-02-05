import { cn } from '@/lib/utils'
import React from 'react'

export function IconHygraph({
  icon,
  className,
}: {
  icon: string
  className?: string
}) {
  return (
    <div className={cn('flex items-center justify-center text-xl', className)}>
      <div
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
      />
    </div>
  )
}
