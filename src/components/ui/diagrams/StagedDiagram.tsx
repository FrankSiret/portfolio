import { useMemo } from 'react'
import type { StagedDiagramSpec } from '@/types'
import { layoutStagedDiagram } from './svgDiagram'
import { InteractiveDiagram } from './InteractiveDiagram'

interface StagedDiagramProps {
  spec: StagedDiagramSpec
  ariaLabel: string
  primaryLabel?: string
  secondaryLabel?: string
}

/** Renders a top-to-bottom StagedDiagramSpec (fan-out / converge / parallel / chain) with click-to-reveal node detail. */
export function StagedDiagram({ spec, ariaLabel, primaryLabel, secondaryLabel }: StagedDiagramProps) {
  const { boxes, connectors, height, viewW } = useMemo(() => layoutStagedDiagram(spec), [spec])

  return (
    <InteractiveDiagram
      boxes={boxes}
      connectors={connectors}
      viewW={viewW}
      viewH={height}
      ariaLabel={ariaLabel}
      primaryLabel={primaryLabel}
      secondaryLabel={secondaryLabel}
    />
  )
}
