import type { StagedDiagramSpec } from './diagram'

export interface EngineeringDecision {
  question: string
  answer: string
}

export interface CaseStudy {
  id: string
  title: string
  role: string
  tags: string[]
  summaryQuote: string
  contextNote: string
  problem: string
  constraints: string[]
  architecture: StagedDiagramSpec
  decisions: EngineeringDecision[]
}

export interface CaseStudiesData {
  heading: string
  subtitle: string
  studies: CaseStudy[]
}
