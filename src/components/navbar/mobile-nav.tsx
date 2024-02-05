'use client'

import { linksConfig } from '@/config/menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { LuLeaf } from 'react-icons/lu'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { cn } from '@/lib/utils'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname.startsWith(href) ? ' text-primary' : 'text-muted-foreground'

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent md:hidden"
        >
          <HiMenuAlt1 />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <Link
          href="/"
          className="flex items-center py-6 text-2xl font-semibold"
          onClick={() => setOpen(false)}
        >
          <LuLeaf className="mr-1 h-6 w-6" />
          <span>aridan</span>
        </Link>

        <nav className="flex flex-col space-y-2">
          {linksConfig.mobileNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-2 rounded-lg p-3 text-lg font-medium transition-colors',
                isActive(item.href),
              )}
              onClick={() => setOpen(false)}
            >
              <item.Icon />
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
