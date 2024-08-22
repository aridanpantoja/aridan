import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import Image, { ImageProps } from 'next/image'

const AvatarVariants = cva('rounded-xl shadow-2xl border', {
  variants: {
    size: {
      default: 'size-16 min-w-16',
      sm: 'size-12 min-w-12',
      lg: 'size-20 min-w-20',
      xl: 'size-40 min-w-40',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface AvatarProps extends ImageProps, VariantProps<typeof AvatarVariants> {}

const AvatarImage = {
  width: 240,
  height: 240,
}

export function Avatar({ className, size, alt = '', ...props }: AvatarProps) {
  return (
    <Image
      className={cn(AvatarVariants({ size }), className)}
      width={AvatarImage.width}
      height={AvatarImage.height}
      alt={alt}
      {...props}
    />
  )
}
