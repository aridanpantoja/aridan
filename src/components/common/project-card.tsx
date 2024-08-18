import Image from 'next/image'
import Link from 'next/link'

const imageCard = {
  width: 1280,
  height: 720,
}

type ProjectCardProps = {
  title: string
  imgUrl: string
  imgAlt: string
  slug: string
}

export function ProjectCard({ title, imgAlt, imgUrl, slug }: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${slug}`}
      className="group relative overflow-hidden rounded-2xl border shadow-2xl"
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

      <div className="w-full space-y-2 border-t bg-background p-4 transition-all group-hover:bg-primary/20">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
    </Link>
  )
}
