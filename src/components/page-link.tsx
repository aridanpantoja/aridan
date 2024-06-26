import { NavLinkProps } from '@/interfaces/nav-link'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function NavLink({ href, Icon, name, asSocial }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex w-fit items-center gap-2 font-semibold text-muted-foreground transition-all hover:text-primary"
      target={asSocial ? '_blank' : ''}
    >
      <Icon className="h-5 w-5" />
      <span className={cn(asSocial ? 'hidden sm:inline' : '')}>{name}</span>
    </Link>
  )
}
