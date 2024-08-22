import profilePic from '$/images/profile.webp'
import { Avatar } from '@/components/common/avatar'
import { ExperienceCard } from '@/components/common/experience-card'
import { Section } from '@/components/common/section'
import { CopyButton } from '@/components/copy-button'
import { DownloadButton } from '@/components/download-button'
import { getExperiences } from '@/querys/get-experiences'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Currículo',
  description:
    'Explore meu currículo e descubra minha trajetória profissional, habilidades e conquistas. ',
}

export default async function Resume() {
  const experiences = await getExperiences()
  const work = experiences.filter(
    (experience) => experience.category === 'work',
  )
  const education = experiences.filter(
    (experience) => experience.category === 'education',
  )

  return (
    <>
      <Section variant="center" maxWidth="prose">
        <Avatar src={profilePic} alt="Homem pardo de 21 anos" size="lg" />

        <h1>Aridan Pantoja</h1>

        <div className="flex flex-wrap justify-center gap-3">
          <DownloadButton
            fileName="curriculo-aridan.pdf"
            filePath="/docs/curriculo-aridan.pdf"
            label="Baixar currículo"
          />
          <CopyButton
            label="Copiar e-mail"
            labelAfterCopy="E-mail copiado"
            textToCopy="aridanpantoja@gmail.com"
          />
        </div>
      </Section>

      <Section>
        <h2>Experiências profissionais</h2>

        <div className="space-y-4">
          {work.map((experience, i) => (
            <ExperienceCard
              key={i}
              title={experience.title}
              local={experience.local}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              image={experience.image.url}
              stack={experience.stack}
            />
          ))}
        </div>
      </Section>

      <Section>
        <h2>Educação</h2>

        <div className="space-y-4">
          {education.map((experience, i) => (
            <ExperienceCard
              key={i}
              title={experience.title}
              local={experience.local}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              image={experience.image.url}
              stack={experience.stack}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
