import { CardProps } from '@/interfaces/card'

const imageCard = {
  width: 500,
  height: 0,
}

export function Card({ title, imgAlt, imgUrl }: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
      {/* <Image
        src={imgUrl}
        width={imageCard.width}
        height={imageCard.height}
        alt={imgAlt}
      /> */}
      <div className="h-[276.75px] w-full bg-primary" />
      <div className="absolute bottom-0 w-full px-4 py-8">
        <h3 className="text-xl font-bold ">{title}</h3>
      </div>
    </div>
  )
}
