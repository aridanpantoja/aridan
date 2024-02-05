import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'
import { TechnologyProps } from '@/types/technology'

interface ProjectCardProps {
  title: string
  slug: string
  thumbnail: string
  shortDescription: string
  technologies: TechnologyProps[]
}

export function ProjectCard({
  title,
  slug,
  thumbnail,
  shortDescription,
  technologies,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${slug}`}
      className="overflow-hidden rounded-lg border bg-background  text-card-foreground shadow-sm transition-all hover:bg-secondary/70"
    >
      <div>
        <div className="w-full overflow-hidden ">
          <Image
            src={thumbnail}
            alt={`Thumbnail de ${title}`}
            width={900}
            height={563}
          />
        </div>

        <div className="flex flex-col gap-2  p-4 text-start">
          <div className="flex flex-wrap gap-2">
            {technologies.map((item, i) => (
              <Badge key={i} variant="outline" className="bg-primary-foregroud">
                {item.name}
              </Badge>
            ))}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}
