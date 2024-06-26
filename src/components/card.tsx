import { CardProps } from '@/interfaces/card'
import Image from 'next/image'

const imageCard = {
  width: 1350,
  height: 1080,
}

export function Card({ title, imgAlt, imgUrl }: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
      <Image
        src={imgUrl}
        width={imageCard.width}
        height={imageCard.height}
        alt={imgAlt}
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent px-4 py-8">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  )
}
