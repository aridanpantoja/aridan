import { IconHygraph } from '@/components/icon-hygraph'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { TechnologyProps } from '@/types/technology'
import { WorkExperienceProps } from '@/types/work-experience'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'

export async function ExperiencesAndStack() {
  function getWorkExperiences(): Promise<{
    workExperiences: WorkExperienceProps[]
  }> {
    const query = `query WorkExperiences {
        workExperiences {
          companyName
          companyLogo {
            url
          }
          description
          endDate
          role
          startDate
          technologies {
            icon
            name
          }
        }
      }`

    return fetchHygraph(query)
  }

  function getTechnologies(): Promise<{
    technologies: TechnologyProps[]
  }> {
    const query = `query Technologies {
        technologies {
          icon
          name
        }
      }`

    return fetchHygraph(query)
  }

  function formatDate(date: string) {
    if (!date) {
      return 'atualmente'
    }

    const newDate = new Date(date)
    const formatedDate = format(newDate, 'MMMM yyy', { locale: ptBR })
    return formatedDate
  }

  const { workExperiences } = await getWorkExperiences()
  const { technologies } = await getTechnologies()

  return (
    <Section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <SectionHeader
            sectionTitle="Experiências & Stack"
            description="Estou sempre disposto a encarar desafios e participar de projetos empolgantes. Veja as minhas experiências profissionais e stack que mais utilizo no cotidiano."
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {technologies.map((item, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="inline-flex gap-1 rounded-sm p-2 text-sm"
              >
                <IconHygraph icon={item.icon} />
                {item.name}
              </Badge>
            ))}
          </div>

          <Link
            className={buttonVariants({ variant: 'link' })}
            href="/projetos"
          >
            Ver experiências &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {workExperiences?.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="grid grid-rows-[48px,1fr] items-center gap-2">
                <div className="h-12 w-12 rounded-full border-2 border-secondary">
                  <Image
                    src={item.companyLogo.url}
                    alt={`Logo da empresa ${item.companyName}`}
                    width={256}
                    height={256}
                  />
                </div>
                <div className="mx-auto h-full w-0.5 bg-secondary"></div>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2">
                <p className="font-bold text-primary">@{item.companyName}</p>
                <p className="font-bold">{item.role}</p>
                <div className="flex items-center gap-1 text-sm font-bold text-muted-foreground">
                  <FaRegCalendarAlt className="h-4 w-4" />
                  {formatDate(item.startDate)} / {formatDate(item.endDate)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies?.map((item, i) => (
                    <Badge key={i}>{item.name}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
