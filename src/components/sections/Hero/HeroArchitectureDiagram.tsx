import { useId, useMemo } from 'react'
import type { DiagramNode, DiagramSpec } from '@/types'
import {
  type LayoutBox,
  type LayoutConnector,
  bottomCenter,
  topCenter,
  elbow,
  SvgDiagramBox,
  SvgDiagramConnector,
} from '@/components/ui/diagrams/svgDiagram'

const VIEW_W = 600
const ROW_GAP = 130
const BOX_H = 60
const CENTER_BOX_W = 190
const LEAF_BOX_W = 160
const GUTTER = 36

function layoutDiagram(root: DiagramNode) {
  const branch = root.children?.find((child) => (child.children?.length ?? 0) > 0)
  const leaf = root.children?.find((child) => child !== branch)
  const grandchildren = branch?.children ?? []

  const rowY = [28 * 2, 28 + ROW_GAP, 28 + ROW_GAP * 2, 28 + ROW_GAP * 3]
  const boxes: LayoutBox[] = []
  const connectors: LayoutConnector[] = []

  const rootBox: LayoutBox = {
    node: root,
    x: VIEW_W / 2 - CENTER_BOX_W / 2,
    y: rowY[0],
    w: CENTER_BOX_W,
    h: BOX_H,
    emphasized: true,
  }
  boxes.push(rootBox)

  if (!branch) {
    return { boxes, connectors, height: rowY[1] + BOX_H + 24 }
  }

  const branchBox: LayoutBox = {
    node: branch,
    x: VIEW_W / 2 - CENTER_BOX_W / 2,
    y: rowY[1],
    w: CENTER_BOX_W,
    h: BOX_H,
    emphasized: true,
  }
  boxes.push(branchBox)
  connectors.push({ id: `${root.id}-${branch.id}`, d: elbow(bottomCenter(rootBox), topCenter(branchBox)) })

  const count = Math.max(grandchildren.length, 1)
  const totalW = count * LEAF_BOX_W + (count - 1) * GUTTER
  const startX = VIEW_W / 2 - totalW / 2
  const gcBoxes: LayoutBox[] = grandchildren.map((gc, i) => ({
    node: gc,
    x: startX + i * (LEAF_BOX_W + GUTTER),
    y: rowY[2],
    w: LEAF_BOX_W,
    h: BOX_H,
    emphasized: false,
  }))
  gcBoxes.forEach((box) => {
    boxes.push(box)
    connectors.push({ id: `${branch.id}-${box.node.id}`, d: elbow(bottomCenter(branchBox), topCenter(box)) })
  })

  let height = rowY[2] + BOX_H + 24

  if (leaf) {
    const leafBox: LayoutBox = {
      node: leaf,
      x: VIEW_W / 2 - CENTER_BOX_W / 2,
      y: rowY[3],
      w: CENTER_BOX_W,
      h: BOX_H,
      emphasized: true,
    }
    boxes.push(leafBox)
    gcBoxes.forEach((box) => {
      connectors.push({ id: `${box.node.id}-${leaf.id}`, d: elbow(bottomCenter(box), topCenter(leafBox)) })
    })
    height = rowY[3] + BOX_H + 24
  }

  return { boxes, connectors, height }
}

export function HeroArchitectureDiagram({ spec }: { spec: DiagramSpec }) {
  const uid = useId()
  const { boxes, connectors, height } = useMemo(() => layoutDiagram(spec.root), [spec])

  return (
    <svg viewBox={`0 0 ${VIEW_W} ${height}`} className="w-full" role="img" aria-label="System architecture diagram">
      {connectors.map((connector, index) => (
        <SvgDiagramConnector key={connector.id} connector={connector} index={index} uid={uid} animate />
      ))}
      {boxes.map((box) => (
        <SvgDiagramBox key={box.node.id} box={box} />
      ))}
    </svg>
  )
}
