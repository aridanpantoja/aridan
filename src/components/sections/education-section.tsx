import { Section } from '@/components/common/section'
import { Experience } from '../experience'

const EDUCATION = [
  {
    role: 'Bachalerado em Engenharia de Computação',
    local: 'Universidade Federal do Pará',
    startDate: 'Agosto 2023',
    endDate: 'Julho de 2025',
    imgUrl: '/images/ufpa.jpg',
    imgAlt: 'Logo da Tutoria Castanhal',
    description:
      'Responsável por ensinar desde os fundamentos da informática básica até conceitos mais avançados, como linguagens de programação e inteligência artificial, para alunos com dificuldades acadêmicas.',
    skills: ['Next.js', 'React', 'Typescript'],
  },
  {
    role: 'Desenvolvedor Front-End Angular | Santander Coders 2024',
    local: 'Ada Tech',
    startDate: 'Julho 2024',
    endDate: 'Dezembro 2024',
    imgUrl: '/images/aridan.jpg',
    imgAlt: 'Logo Aridan.dev',
    description:
      'Responsável por criar e manter websites para diversos clientes.',
    skills: ['Next.js', 'React', 'Typescript'],
  },

  {
    role: 'Desenvolvedor Front-End React',
    local: 'Alura',
    startDate: '2022',
    endDate: '2023',
    imgUrl: '/images/aridan.jpg',
    imgAlt: 'Logo Aridan.dev',
    description:
      'Responsável por criar e manter websites para diversos clientes.',
    skills: ['Next.js', 'React', 'Typescript'],
  },
  {
    role: 'Técnico em Redes de Computadores',
    local: 'Universidade Federal do Pará',
    startDate: '2023',
    endDate: '2024',
    imgUrl: '/images/ufpa.jpg',
    imgAlt: 'Logo da Universidade Federal do Pará',
    description:
      'Responsável pelo desenvolvimento e manutenção do site da Faculdade de Computação, integrei HTML, CSS e JavaScript aos CMSs Joomla e Wordpress. Além disso, desempenhei o papel de gestor das redes sociais da FACOMP, criando conteúdos visualmente atrativos e textos cativantes para engajar o público.',
    skills: ['Next.js', 'React', 'Typescript'],
  },
]

export function EducationSection() {
  return (
    <Section className="space-y-6">
      <h2>Education</h2>

      {EDUCATION.map((experience, i) => (
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
