import { PAGES } from '@/config'
import Link from 'next/link'
import { Logo } from './logo'

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 flex h-12 w-full items-center justify-between rounded-full border bg-background/95 px-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <Logo />
      <nav>
        <ul className="space-x-4">
          {PAGES.map((page, i) => (
            <li className="inline-block" key={i}>
              <Link
                href={page.href}
                className="text-sm font-medium hover:underline"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
