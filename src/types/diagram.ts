import type { IconName } from './common'

export type DiagramOrientation = 'horizontal' | 'vertical'
export type DiagramKind = 'chain' | 'tree'

/** Optional click-to-reveal detail for a diagram node — what it's responsible for and why it exists. */
export interface NodeDetail {
  responsibilities?: string[]
  concerns?: string[]
}

export interface DiagramNode {
  id: string
  label: string
  sublabel?: string
  icon?: IconName
  children?: DiagramNode[]
  detail?: NodeDetail
}

export interface DiagramSpec {
  kind: DiagramKind
  orientation: DiagramOrientation
  root: DiagramNode
}

/**
 * A "staged" diagram: a top-to-bottom sequence of rows, each either a single node,
 * a fan-out into multiple nodes, multiple nodes continuing straight down in parallel,
 * or a converge back into a single node. Unlike DiagramNode's tree, this can express
 * converging edges (multiple parents into one child).
 */
export interface StageNode {
  id: string
  label: string
  icon?: IconName
  detail?: NodeDetail
}

export type DiagramStage =
  | { kind: 'single'; node: StageNode; emphasized?: boolean }
  | { kind: 'fan'; nodes: StageNode[] }
  | { kind: 'parallel'; nodes: StageNode[] }
  | { kind: 'converge'; node: StageNode; emphasized?: boolean }

export interface StagedDiagramSpec {
  stages: DiagramStage[]
}

/** A hub node surrounded by a ring of nodes connected in a cycle (each pointing to the next, wrapping around). */
export interface CycleDiagramSpec {
  center: DiagramNode
  ring: DiagramNode[]
}
