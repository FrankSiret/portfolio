import type { StagedDiagramSpec } from '@/types'
import { StagedDiagram } from '@/components/ui/diagrams/StagedDiagram'

export function CaseStudyArchitectureDiagram({ spec }: { spec: StagedDiagramSpec }) {
  return <StagedDiagram spec={spec} ariaLabel="Interactive case study architecture diagram" />
}
