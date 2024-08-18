import ProfilePic from '../../../public/images/profile.webp'
import { Avatar } from '../common/avatar'
import { Section } from '../common/section'
import { Badge } from '../shadcn-ui/badge'

const TAGS = ['Web Developer', 'React', 'Next.js', 'Typescript']

export function HeroSection() {
  return (
    <Section variant="center" maxWidth="prose">
      <div className="relative">
        <Avatar src={ProfilePic} alt="Homem pardo de 21 anos" size="large" />
        <span className="absolute left-20 flex h-4 w-4 -translate-x-3/4 -translate-y-3/4">
          <span className="absolute inline-flex h-full w-full animate-[ping_4s_infinite_100ms] rounded-full bg-violet-400 opacity-40" />
          <span className="absolute inline-flex h-4 w-4 rounded-full bg-violet-500" />
        </span>
      </div>

      <h1>Aridan Pantoja</h1>

      <div className="flex flex-wrap justify-center gap-3">
        {TAGS.map((tag, i) => (
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>
    </Section>
  )
}
