import type { StagedDiagramSpec } from './diagram'

export interface ProblemSolvingStat {
  label: string
  value: string | number | null
}

export interface ProblemSolvingCard {
  id: 'leetcode' | 'codeforces' | 'icpc'
  title: string
  quote: string
  linkLabel: string
  url: string | null
  stats?: ProblemSolvingStat[]
}

export interface ICPCAward {
  award: string
  url?: string
  date: string
  location: string
  place: string
  team: string
}

export interface ComparisonPair {
  algorithm: string
  production: string
}

export interface ProblemSolvingData {
  heading: string
  subtitle: string
  chain: StagedDiagramSpec
  cards: ProblemSolvingCard[]
  icpcAwardsHeading: string
  icpcAwards: ICPCAward[]
  comparisonTagline: string
  comparisons: ComparisonPair[]
  closingQuote: string
}
