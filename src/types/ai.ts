import type { StagedDiagramSpec } from './diagram'

export interface AICapability {
  id: 'explore' | 'build' | 'verify'
  title: string
  tagline: string
  flow: string[]
}

export interface AIData {
  heading: string
  tagline: string
  diagram: StagedDiagramSpec
  capabilities: AICapability[]
  closingQuote: string
}
