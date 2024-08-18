import { Avatar } from './common/avatar'
import { Badge } from './shadcn-ui/badge'

type ExperienceProps = {
  imgUrl: string
  imgAlt: string
  role: string
  local: string
  startDate: string
  endDate: string
  description: string
  skills: string[]
}

export function Experience({
  role,
  description,
  endDate,
  imgAlt,
  imgUrl,
  local,
  startDate,
  skills,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-6  md:flex-row">
      <Avatar src={imgUrl} alt={imgAlt} />
      <div>
        <div>
          <p className="font-semibold">{role}</p>
          <p className="text-sm">{local}</p>
          <p className="text-sm">
            {startDate} - {endDate}
          </p>
        </div>

        <p className="mt-4">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((item, i) => (
            <Badge className="text-xs" key={i}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
