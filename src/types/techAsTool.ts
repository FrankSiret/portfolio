import type { StagedDiagramSpec } from './diagram'

export interface TechScenario {
  id: string
  problem: string
  choices: string[]
}

export interface TechAsToolData {
  heading: string
  subtitle: string
  diagram: StagedDiagramSpec
  quote: string
  scenariosHeading: string
  scenarios: TechScenario[]
}
