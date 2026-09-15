import { useMemo } from 'react'
import type { CycleDiagramSpec } from '@/types'
import { type LayoutBox, type LayoutConnector } from '@/components/ui/diagrams/svgDiagram'
import { InteractiveDiagram } from '@/components/ui/diagrams/InteractiveDiagram'

const VIEW = 520
const CENTER = VIEW / 2
const RING_R = 190
const RING_W = 122
const RING_H = 54
const HUB_W = 168
const HUB_H = 92

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) }
}

/** Lays out a hub node at the center with its ring nodes evenly spaced in a circle, connected in sequence. */
function layoutCycle(spec: CycleDiagramSpec) {
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

  const ringBoxes: LayoutBox[] = spec.ring.map((node, i) => {
    const angle = -90 + i * (360 / n)
    const c = polar(angle, RING_R)
    return { node, x: c.x - RING_W / 2, y: c.y - RING_H / 2, w: RING_W, h: RING_H, emphasized: false, compact: true }
  })
  boxes.push(...ringBoxes)

  ringBoxes.forEach((box, i) => {
    const next = ringBoxes[(i + 1) % n]
    const midAngle = -90 + (i + 0.5) * (360 / n)
    const control = polar(midAngle, RING_R * 1.4)
    const from = { x: box.x + box.w / 2, y: box.y + box.h / 2 }
    const to = { x: next.x + next.w / 2, y: next.y + next.h / 2 }
    connectors.push({
      id: `${box.node.id}-${next.node.id}`,
      d: `M ${from.x} ${from.y} Q ${control.x} ${control.y} ${to.x} ${to.y}`,
    })
  })

  return { boxes, connectors, viewW: VIEW, viewH: VIEW }
}

export function LeadershipCycleDiagram({ spec }: { spec: CycleDiagramSpec }) {
  const { boxes, connectors, viewW, viewH } = useMemo(() => layoutCycle(spec), [spec])

  return (
    <InteractiveDiagram
      boxes={boxes}
      connectors={connectors}
      viewW={viewW}
      viewH={viewH}
      ariaLabel="Technical leadership cycle diagram"
    />
  )
}
