import { PAGES } from '@/config'
import Link from 'next/link'
import { Logo } from './logo'

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 flex h-12 w-full items-center justify-between rounded-full border border-border/40 bg-background/95 px-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <Logo />
      <nav>
        <ul className="space-x-4">
          {PAGES.map((page, i) => (
            <Link key={i} href={page.href} className="text-sm font-medium">
              {page.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}
