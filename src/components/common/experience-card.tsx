import { Avatar } from '@/components/common/avatar'
import { Badge } from '@/components/shadcn-ui/badge'
import { formatDate } from '@/lib/utils'
import { StackProps } from '@/types'

type ExperienceCardProps = {
  image: string
  title: string
  local: string
  startDate: string
  endDate: string | undefined
  description: string
  badge?: string
  stack: StackProps
}

export function ExperienceCard({
  title,
  description,
  endDate,
  image,
  local,
  startDate,
  stack,
  badge,
}: ExperienceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-background p-6">
      {badge && (
        <Badge className="absolute right-0 top-0 rounded-none rounded-bl-xl font-bold">
          {badge}
        </Badge>
      )}

      <div className="flex flex-col gap-6  md:flex-row">
        <Avatar src={image} alt={local} />
        <div>
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm">{local}</p>
            <p className="text-sm">
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>

          <p className="mt-4">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item, i) => (
              <Badge className="text-xs" key={i}>
                {item.text}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
