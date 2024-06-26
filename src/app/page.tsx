import { Card } from '@/components/card'
import { NavLink } from '@/components/nav-link'
import { Badge } from '@/components/shadcn-ui/badge'
import Image from 'next/image'
import { LuArrowRight } from 'react-icons/lu'
import ProfilePic from '../../public/images/profile.webp'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <Image
            src={ProfilePic}
            alt="Foto de Aridan"
            className="h-16 w-16 rounded-xl shadow-md"
          />
          <span className="absolute left-16 flex h-3 w-3 -translate-x-3/4 -translate-y-3/4">
            <span className="absolute inline-flex h-full w-full animate-[ping_4s_infinite_100ms] rounded-full bg-violet-300 opacity-40" />
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-violet-400" />
          </span>
        </div>

        <h1 className="text-4xl font-semibold">Aridan Pantoja</h1>

        <div className="flex flex-wrap justify-center gap-3">
          <Badge>Web Developer</Badge>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Typescript</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2>About me</h2>

        <p className="text-lg font-medium text-muted-foreground">
          Hello, I&apos;m Patrick Gio - a Senior Product Designer with a passion
          for creating innovative, user-centric designs that solve real-world
          problems. With over a decade of experience in the field and a degree
          in industrial design, I have honed my skills and developed a deep
          understanding of user behavior.
        </p>

        <NavLink
          name="Learn More"
          Icon={LuArrowRight}
          href="/curriculo"
          className="flex-row-reverse text-primary"
        />
      </section>

      <section className="space-y-6">
        <h2>Recent works</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card
            imgUrl="/images/teste.png"
            imgAlt="Teste"
            title="Notícia Virtual"
          />
          <Card
            imgUrl="/images/teste.png"
            imgAlt="Teste"
            title="Camile Medeiros"
          />
        </div>
      </section>
    </>
  )
}
