import type { Period } from './common'

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  companyUrl?: string
  period: Period
  bullets: string[]
  tech: string[]
}

export interface ExperienceData {
  heading: string
  entries: ExperienceEntry[]
}
