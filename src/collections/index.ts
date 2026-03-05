import type { CollectionConfig } from 'payload'
import { Education } from './Education'
import { Experiences } from './Experiences'
import { Media } from './Media'
import { Organizations } from './Organizations'
import { Projects } from './Projects'
import { Users } from './Users'

export const Collections: CollectionConfig[] = [
  Users,
  Media,
  Organizations,
  Experiences,
  Education,
  Projects,
]
