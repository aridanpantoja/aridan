import { Section } from '@/components/common/section'
import { Experience } from '../experience'

const EXPERIENCES = [
  {
    role: 'Auxiliar de TI',
    local: 'UFPA',
    startDate: 'Agosto 2024',
    endDate: 'Atualmente',
    imgUrl: '/images/ufpa.jpg',
    imgAlt: 'Logo da Tutoria Castanhal',
    description:
      "As a Software Engineer at Vercel, I've been responsible for building and maintaining high-performance web applications using the latest technologies. I've contributed to the development of the Vercel platform, helping to improve its scalability, reliability, and user experience.",
    skills: ['Next.js', 'React', 'Typescript'],
  },
  {
    role: 'Professor de Informática Básica',
    local: 'UFPA',
    startDate: 'Agosto 2023',
    endDate: 'Julho 2024',
    imgUrl: '/images/tutoria.jpg',
    imgAlt: 'Logo da Tutoria Castanhal',
    description:
      'Responsável por ensinar desde os fundamentos da informática básica até conceitos mais avançados, como linguagens de programação e inteligência artificial, para alunos com dificuldades acadêmicas.',
    skills: ['Next.js', 'React', 'Typescript'],
  },
]

export function ExperiencesSection() {
  return (
    <Section className="space-y-6">
      <h2>Experiences</h2>

      {EXPERIENCES.map((experience, i) => (
        <Experience
          key={i}
          role={experience.role}
          local={experience.local}
          startDate={experience.startDate}
          endDate={experience.endDate}
          description={experience.description}
          imgUrl={experience.imgUrl}
          imgAlt={experience.imgAlt}
          skills={experience.skills}
        />
      ))}
    </Section>
  )
}
