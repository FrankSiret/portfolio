import { useMemo } from 'react'
import type { CycleDiagramSpec } from '@/types'
import { type LayoutBox, type LayoutConnector } from '@/components/ui/diagrams/svgDiagram'
import { InteractiveDiagram } from '@/components/ui/diagrams/InteractiveDiagram'

const VIEW = 520
const CENTER = VIEW / 2
const RING_R = 195
const RING_W = 138
const RING_H = 58
const HUB_W = 180
const HUB_H = 72

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) }
}

/** A center degree with subjects radiating outward as spokes — no ring-to-ring connections. */
function layoutRadial(spec: CycleDiagramSpec) {
  const n = spec.ring.length
  const boxes: LayoutBox[] = []
  const connectors: LayoutConnector[] = []

  const hubBox: LayoutBox = {
    node: spec.center,
    x: CENTER - HUB_W / 2,
    y: CENTER - HUB_H / 2,
    w: HUB_W,
    h: HUB_H,
    emphasized: true,
  }
  boxes.push(hubBox)
  const hubCenter = { x: CENTER, y: CENTER }

  spec.ring.forEach((node, i) => {
    const angle = -90 + i * (360 / n)
    const c = polar(angle, RING_R)
    const box: LayoutBox = {
      node,
      x: c.x - RING_W / 2,
      y: c.y - RING_H / 2,
      w: RING_W,
      h: RING_H,
      emphasized: false,
      compact: true,
    }
    boxes.push(box)
    connectors.push({ id: `${spec.center.id}-${node.id}`, d: `M ${hubCenter.x} ${hubCenter.y} L ${c.x} ${c.y}` })
  })

  return { boxes, connectors, viewW: VIEW, viewH: VIEW }
}

export function EducationConstellationDiagram({ spec }: { spec: CycleDiagramSpec }) {
  const { boxes, connectors, viewW, viewH } = useMemo(() => layoutRadial(spec), [spec])

  return (
    <InteractiveDiagram
      boxes={boxes}
      connectors={connectors}
      viewW={viewW}
      viewH={viewH}
      ariaLabel="Academic foundations radiating from a Computer Science degree"
      primaryLabel="Core Topics"
      secondaryLabel="Applied today to"
    />
  )
}
