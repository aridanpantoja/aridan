'use client'

import { linksConfig } from '@/config/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuLeaf } from 'react-icons/lu'
import { ToggleTheme } from '../theme/toggle-theme'
import { Button } from '../ui/button'
import MobileNav from './mobile-nav'

export default function NavBar() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname.startsWith(href) ? 'text-primary' : ''

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-14 grid-cols-4 items-center justify-center md:grid">
          <MobileNav />

          <Link href="/" className="hidden items-center font-semibold md:flex">
            <LuLeaf className="mr-0.5 h-4 w-4" />
            <span>aridan</span>
          </Link>

          <nav className="col-span-2 hidden flex-1 items-center justify-center md:flex">
            {linksConfig.mainNav.map((item) => (
              <Button
                asChild
                variant="link"
                size="sm"
                key={item.label}
                className="text-foreground"
              >
                <Link
                  href={item.href}
                  className={cn('transition-colors', isActive(item.href))}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="ml-auto flex items-center text-foreground">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  )
}
