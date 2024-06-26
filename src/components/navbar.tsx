import { NavLink } from '@/components/page-link'
import { Separator } from '@/components/shadcn-ui/separator'
import { PAGES, SOCIALS } from '@/config'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile.webp'
import { Button } from './shadcn-ui/button'

export function Navbar() {
  return (
    <aside className="flex flex-col items-center gap-6 lg:sticky lg:items-start">
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <div className="relative">
          <Image
            src={ProfilePic}
            alt="Foto de Aridan"
            className="h-24 w-24 rounded-xl shadow-md lg:h-12 lg:w-12"
          />
          <span className="absolute left-[88px] flex h-3 w-3 -translate-y-2/3 lg:left-10">
            <span className="absolute inline-flex h-full w-full animate-[ping_4s_infinite_100ms] rounded-full bg-emerald-500 opacity-40" />
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-600" />
          </span>
        </div>
        <h1 className="text-2xl font-bold lg:text-xl">Aridan Pantoja</h1>
      </div>

      <p className="max-w-lg text-center font-semibold text-muted-foreground lg:text-start">
        Desenvolvedor front-end em{' '}
        <span className="font-bold text-primary">React</span> &{' '}
        <span className="font-bold text-primary">Next.js</span>, focado em criar
        interfaces web modernas e eficientes.
      </p>

      <nav>
        <ul className="flex gap-4 lg:flex-col">
          {PAGES.map((page, i) => (
            <NavLink
              key={i}
              href={page.href}
              Icon={page.Icon}
              name={page.name}
            />
          ))}
        </ul>
      </nav>

      <Button className="shadow-md">Entrar em contato</Button>

      <Separator className="lg:mt-auto" />

      <nav>
        <ul className="flex gap-4 lg:flex-col">
          {SOCIALS.map((social, i) => (
            <NavLink
              key={i}
              name={social.name}
              href={social.href}
              Icon={social.Icon}
              asSocial
            />
          ))}
        </ul>
      </nav>
    </aside>
  )
}
