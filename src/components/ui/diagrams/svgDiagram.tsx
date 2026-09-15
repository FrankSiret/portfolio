import { motion } from 'framer-motion'
import type { DiagramNode, DiagramStage, StagedDiagramSpec } from '@/types'
import { getIcon } from '@/lib/icons'
import { viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

export interface Point {
  x: number
  y: number
}

export interface LayoutBox {
  node: DiagramNode
  x: number
  y: number
  w: number
  h: number
  emphasized: boolean
  /** Use a smaller label font — for layouts with many narrow boxes. */
  compact?: boolean
}

export interface LayoutConnector {
  id: string
  d: string
}

export function bottomCenter(box: LayoutBox): Point {
  return { x: box.x + box.w / 2, y: box.y + box.h }
}

export function topCenter(box: LayoutBox): Point {
  return { x: box.x + box.w / 2, y: box.y }
}

/** Right-angle "elbow" connector: down from `from`, across, then down into `to`. */
export function elbow(from: Point, to: Point): string {
  const midY = from.y + (to.y - from.y) / 2
  if (from.x === to.x) return `M ${from.x} ${from.y} L ${to.x} ${to.y}`
  return `M ${from.x} ${from.y} L ${from.x} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`
}

interface SvgDiagramBoxProps {
  box: LayoutBox
  selected?: boolean
  onClick?: () => void
}

export function SvgDiagramBox({ box, selected = false, onClick }: SvgDiagramBoxProps) {
  const Icon = box.node.icon ? getIcon(box.node.icon) : null
  const isInteractive = Boolean(onClick)

  return (
    <foreignObject x={box.x} y={box.y} width={box.w} height={box.h}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={onClick}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onKeyDown={
          isInteractive
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onClick?.()
                }
              }
            : undefined
        }
        className={cn(
          'relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-md border px-2 text-center transition-colors',
          box.emphasized ? 'border-accent/40 bg-accent/5' : 'border-accent/20 bg-accent/4',
          isInteractive && 'cursor-pointer hover:border-accent/70',
          selected && 'border-accent bg-accent/15',
        )}
      >
        {isInteractive && !selected && (
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent" />
        )}
        {Icon && <Icon className="h-4 w-4 text-accent" />}
        <span
          className={cn(
            'font-mono font-medium uppercase tracking-wide text-text',
            box.compact ? 'text-[10px] leading-tight' : 'text-sm',
          )}
        >
          {box.node.label}
        </span>
      </motion.div>
    </foreignObject>
  )
}

export function SvgDiagramConnector({
  connector,
  index,
  uid,
  animate = false,
}: {
  connector: LayoutConnector
  index: number
  uid: string
  animate?: boolean
}) {
  const pathId = `${uid}-${connector.id}`

  return (
    <g>
      <path id={pathId} d={connector.d} fill="none" stroke="rgb(var(--color-border))" strokeWidth={1.5} />
      <motion.path
        d={connector.d}
        fill="none"
        stroke="rgb(var(--color-accent))"
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.7 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeInOut' }}
      />
      {animate && (
        <circle r={2.6} fill="rgb(var(--color-accent))">
          <animateMotion dur="2.4s" begin={`${index * 0.35}s`} repeatCount="indefinite">
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      )}
    </g>
  )
}

const STAGE_ROOT_W = 190
const STAGE_LEAF_W = 150
const STAGE_GUTTER = 20
const STAGE_BOX_H = 56
const STAGE_ROW_GAP = 92

function stageNodes(stage: DiagramStage): DiagramNode[] {
  return stage.kind === 'fan' || stage.kind === 'parallel' ? stage.nodes : [stage.node]
}

function stageEmphasized(stage: DiagramStage): boolean {
  return (stage.kind === 'single' || stage.kind === 'converge') && Boolean(stage.emphasized)
}

/**
 * Lays out a StagedDiagramSpec top-to-bottom. Each row's connectors are inferred from
 * how its node count compares to the row above: 1→N fans out, N→1 converges, N→N (a
 * "parallel" row) draws straight lines column-for-column, and 1→1 is a plain chain link.
 */
export function layoutStagedDiagram(spec: StagedDiagramSpec) {
  const maxCols = Math.max(1, ...spec.stages.map((stage) => stageNodes(stage).length))
  const viewW = Math.max(600, maxCols * STAGE_LEAF_W + (maxCols - 1) * STAGE_GUTTER + 48)

  const boxes: LayoutBox[] = []
  const connectors: LayoutConnector[] = []
  let prevBoxes: LayoutBox[] = []

  spec.stages.forEach((stage, rowIndex) => {
    const y = 24 + rowIndex * STAGE_ROW_GAP
    const nodes = stageNodes(stage)
    const isCentered = nodes.length === 1

    const totalW = isCentered ? STAGE_ROOT_W : nodes.length * STAGE_LEAF_W + (nodes.length - 1) * STAGE_GUTTER
    const startX = viewW / 2 - totalW / 2

    const stageBoxes: LayoutBox[] = nodes.map((node, i) => ({
      node,
      x: isCentered ? startX : startX + i * (STAGE_LEAF_W + STAGE_GUTTER),
      y,
      w: isCentered ? STAGE_ROOT_W : STAGE_LEAF_W,
      h: STAGE_BOX_H,
      emphasized: stageEmphasized(stage),
      compact: !isCentered,
    }))

    if (prevBoxes.length > 0) {
      if (prevBoxes.length === stageBoxes.length && stageBoxes.length > 1) {
        // Parallel row: connect each column straight down to its counterpart.
        stageBoxes.forEach((box, i) => {
          connectors.push({ id: `${prevBoxes[i].node.id}-${box.node.id}`, d: elbow(bottomCenter(prevBoxes[i]), topCenter(box)) })
        })
      } else if (prevBoxes.length === 1) {
        // Fan out from a single source to every box in this row.
        stageBoxes.forEach((box) => {
          connectors.push({ id: `${prevBoxes[0].node.id}-${box.node.id}`, d: elbow(bottomCenter(prevBoxes[0]), topCenter(box)) })
        })
      } else if (stageBoxes.length === 1) {
        // Converge every box from the row above into this single target.
        prevBoxes.forEach((box) => {
          connectors.push({ id: `${box.node.id}-${stageBoxes[0].node.id}`, d: elbow(bottomCenter(box), topCenter(stageBoxes[0])) })
        })
      }
    }

    boxes.push(...stageBoxes)
    prevBoxes = stageBoxes
  })

  const height = 24 + (spec.stages.length - 1) * STAGE_ROW_GAP + STAGE_BOX_H + 24
  return { boxes, connectors, height, viewW }
}
