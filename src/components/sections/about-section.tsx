import { Section } from '@/components/common/section'
import { SOCIALS } from '@/config'
import Link from 'next/link'
import { buttonVariants } from '../shadcn-ui/button'

export function AboutSection() {
  return (
    <Section>
      <h2>Sobre mim</h2>

      <p className="text-lg">
        Desenvolvedor web com 1 ano de experiência, com domínio em HTML, CSS,
        JavaScript, TypeScript e frameworks como React e Next.js. Atualmente,
        estou cursando Engenharia de Computação e tenho formações complementares
        em desenvolvimento front-end pela Ada Tech e Alura.
      </p>

      <div className="space-x-2">
        {SOCIALS.map((social, i) => (
          <Link
            href={social.href}
            key={i}
            className={buttonVariants({
              size: 'icon',
            })}
          >
            <social.Icon className="size-5" />
          </Link>
        ))}
      </div>
    </Section>
  )
}
