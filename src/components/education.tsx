import { Avatar } from './common/avatar'

type EducationProps = {
  imgUrl: string
  imgAlt: string
  area: string
  college: string
  startDate: string
  endDate: string
}

export function Education({
  imgUrl,
  imgAlt,
  area,
  college,
  startDate,
  endDate,
}: EducationProps) {
  return (
    <div className="flex gap-6">
      <Avatar src={imgUrl} alt={imgAlt} />
      <div>
        <div>
          <p className="font-semibold">{area}</p>
          <p className="text-sm">{college}</p>
          <p className="text-sm">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </div>
  )
}
