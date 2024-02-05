import Link from 'next/link'
import { Section } from '../section/section'
import { Button } from '../ui/button'

export function HeadSection({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Section enableBackground>
      <div className="mx-auto flex max-w-prose flex-col items-center gap-4 py-20 text-center ">
        <h1 className="text-4xl font-extrabold tracking-tight text-accent-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">{description}</p>
        <Button asChild>
          <Link href="/">&larr; Voltar para home</Link>
        </Button>
      </div>
    </Section>
  )
}
