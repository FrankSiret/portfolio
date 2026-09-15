import type { Period } from './common'
import type { CycleDiagramSpec } from './diagram'

export interface Degree {
  id: string
  title: string
  institution: string
  institutionUrl?: string
  period: Period
  honors: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date?: string
  url: string
}

export interface LanguageEntry {
  language: string
  level: string
}

export interface EducationData {
  heading: string
  subtitle: string
  tagline: string
  degrees: Degree[]
  constellation: CycleDiagramSpec
  mindsetFlow: string[]
  closingQuote: string
  credentialsHeading: string
  certificates: Certificate[]
  languages: LanguageEntry[]
}
