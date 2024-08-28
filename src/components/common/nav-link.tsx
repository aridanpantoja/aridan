import { cn } from '@/lib/utils'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'

type NavLinkProps = {
  href: string
  name: string
  Icon: IconType
  asSocial?: boolean
  className?: string
}

export function NavLink({
  href,
  Icon,
  name,
  asSocial,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'border-b-1 flex w-fit items-center gap-2 border-b border-b-transparent pb-1 font-semibold text-primary hover:border-b-primary dark:text-purple-400 dark:hover:border-b-purple-400',
        className,
      )}
      target={asSocial ? '_blank' : ''}
    >
      <Icon className="h-5 w-5" />
      <span className={cn(asSocial ? 'hidden sm:inline' : '')}>{name}</span>
    </Link>
  )
}
