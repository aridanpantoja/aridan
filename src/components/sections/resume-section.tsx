import { LuArrowRight } from 'react-icons/lu'
import { NavLink } from '../common/nav-link'
import { Section } from '../common/section'
import { Experience } from '../experience'
import { Badge } from '../shadcn-ui/badge'

const ExperiencesAndEducation = [
  {
    category: 'Trabalho atual',
    role: 'Estagiário de TI',
    local: 'Universidade Federal do Pará',
    startDate: 'Agosto 2024',
    endDate: 'Atualmente',
    imgUrl: '/images/ufpa.jpg',
    imgAlt: 'Logo da UFPA',
    description:
      "As a Software Engineer at Vercel, I've been responsible for building and maintaining high-performance web applications using the latest technologies. I've contributed to the development of the Vercel platform, helping to improve its scalability, reliability, and user experience.",
    skills: ['Linux', 'Redes de Computadores', 'Manutenção'],
  },
  {
    category: 'Formação acadêmica',
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
    category: 'Formação complementar',
    role: 'Desenvolvedor Front-End Angular',
    local: 'Ada Tech',
    startDate: 'Julho 2024',
    endDate: 'Dezembro 2024',
    imgUrl: '/images/adatech.jpeg',
    imgAlt: 'Logo da Ada Tech',
    description:
      'Responsável por ensinar desde os fundamentos da informática básica até conceitos mais avançados, como linguagens de programação e inteligência artificial, para alunos com dificuldades acadêmicas.',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
]

export function ResumeSection() {
  return (
    <Section>
      <h2>Principais experiências e formações</h2>

      <div className="grid grid-cols-1 gap-4">
        {ExperiencesAndEducation.map((experience, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl border bg-background p-6"
          >
            <Badge className="absolute right-0 top-0 rounded-none rounded-bl-xl font-bold">
              {experience.category}
            </Badge>
            <Experience
              role={experience.role}
              local={experience.local}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              imgUrl={experience.imgUrl}
              imgAlt={experience.imgAlt}
              skills={experience.skills}
            />
          </div>
        ))}
      </div>

      <NavLink
        name="Ver todas experiências e formações"
        Icon={LuArrowRight}
        href="/curriculo"
        className="flex-row-reverse text-primary"
      />
    </Section>
  )
}
