import Image from 'next/image'
import Link from 'next/link'

const imageCard = {
  width: 1280,
  height: 720,
}

type ProjectCardProps = {
  title: string
  description: string
  imgUrl: string
  imgAlt: string
  slug: string
}

export function ProjectCard({
  title,
  imgAlt,
  imgUrl,
  slug,
  description,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${slug}`}
      className="group relative overflow-hidden rounded-2xl border bg-background shadow-2xl hover:bg-primary/20"
    >
      <div className="overflow-hidden">
        <Image
          src={imgUrl}
          width={imageCard.width}
          height={imageCard.height}
          alt={imgAlt}
          className="object-cover transition-all group-hover:rotate-3 group-hover:scale-110"
        />
      </div>

      <div className="w-full space-y-2 border-t  p-4 transition-all">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}
