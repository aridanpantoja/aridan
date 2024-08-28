import profilePic from '$/images/profile.webp'
import { Avatar } from '@/components/common/avatar'
import { ExperienceCard } from '@/components/common/experience-card'
import { NavLink } from '@/components/common/nav-link'
import { ProjectCard } from '@/components/common/project-card'
import { Section } from '@/components/common/section'
import { Badge } from '@/components/shadcn-ui/badge'
import { buttonVariants } from '@/components/shadcn-ui/button'
import { SOCIALS } from '@/config'
import { getHome } from '@/querys/get-home'
import Link from 'next/link'
import { LuArrowRight } from 'react-icons/lu'

export default async function Home() {
  const home = await getHome()

  return (
    <>
      <Section variant="center" maxWidth="prose">
        <div className="relative">
          <Avatar src={profilePic} alt="Homem pardo de 21 anos" size="lg" />
          <span className="absolute left-20 flex h-4 w-4 -translate-x-3/4 -translate-y-3/4">
            <span className="absolute inline-flex h-full w-full animate-[ping_4s_infinite_100ms] rounded-full bg-violet-400 opacity-40" />
            <span className="absolute inline-flex h-4 w-4 rounded-full bg-violet-500" />
          </span>
        </div>

        <h1>Aridan Pantoja</h1>

        <div className="flex flex-wrap justify-center gap-3">
          {home.stack.map((item, i) => (
            <Badge key={i}>{item.text}</Badge>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Sobre mim</h2>

        <p className="text-lg">{home.description}</p>

        <div className="space-x-2">
          {SOCIALS.map((social, i) => (
            <Link
              href={social.href}
              key={i}
              className={buttonVariants({
                size: 'icon',
              })}
              aria-label={social.ariaLabel}
            >
              <social.Icon className="size-5" />
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2>Projetos em destaque</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {home.projects.map((project, i) => (
            <ProjectCard
              key={i}
              imgUrl={project.image.url}
              imgAlt={project.title}
              title={project.title}
              slug={project.slug}
              description={project.shortDescription}
            />
          ))}

          <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-foreground/30 bg-gradient-to-r from-primary to-primary/50 p-8 shadow-2xl md:p-14">
            <div className="w-full space-y-4 rounded-2xl bg-background p-6 shadow-2xl">
              <h3 className="text-2xl font-bold">
                Confira todos os projetos do meu portfólio aqui!
              </h3>
              <NavLink
                name="Ver todos projetos"
                Icon={LuArrowRight}
                href="/projetos"
                className="flex-row-reverse text-primary"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2>Principais experiências e formações</h2>

        <div className="space-y-4">
          {home.currentPosition && (
            <ExperienceCard
              title={home.currentPosition.title}
              local={home.currentPosition.local}
              startDate={home.currentPosition.startDate}
              endDate={home.currentPosition.endDate}
              description={home.currentPosition.description}
              image={home.currentPosition.image.url}
              stack={home.currentPosition.stack}
              badge="Trabalho atual"
            />
          )}

          {home.academicEducation && (
            <ExperienceCard
              title={home.academicEducation.title}
              local={home.academicEducation.local}
              startDate={home.academicEducation.startDate}
              endDate={home.academicEducation.endDate}
              description={home.academicEducation.description}
              image={home.academicEducation.image.url}
              stack={home.academicEducation.stack}
              badge="Formação acadêmica"
            />
          )}

          {home.supplementaryEducation && (
            <ExperienceCard
              title={home.supplementaryEducation.title}
              local={home.supplementaryEducation.local}
              startDate={home.supplementaryEducation.startDate}
              endDate={home.supplementaryEducation.endDate}
              description={home.supplementaryEducation.description}
              image={home.supplementaryEducation.image.url}
              stack={home.supplementaryEducation.stack}
              badge="Formação complementar"
            />
          )}
        </div>

        <NavLink
          name="Ver todas experiências e formações"
          Icon={LuArrowRight}
          href="/curriculo"
          className="flex-row-reverse text-primary"
        />
      </Section>
    </>
  )
}
