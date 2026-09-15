import type { IconName } from './common'

export interface Hobby {
  id: string
  icon: IconName
  title: string
  quote: string
  interactive?: boolean
}

export interface HobbiesData {
  heading: string
  subtitle: string
  hobbies: Hobby[]
}
