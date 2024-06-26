import { NavLinkProps } from '@/interfaces/nav-link'
import { cn } from '@/lib/utils'
import Link from 'next/link'

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
        'border-b-1 flex w-fit items-center gap-2 border-b border-b-transparent pb-1 font-semibold text-primary transition-all hover:border-b-primary',
        className,
      )}
      target={asSocial ? '_blank' : ''}
    >
      <Icon className="h-5 w-5" />
      <span className={cn(asSocial ? 'hidden sm:inline' : '')}>{name}</span>
    </Link>
  )
}
