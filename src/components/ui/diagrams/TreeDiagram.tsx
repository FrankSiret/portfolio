import type { DiagramNode } from '@/types'
import { DiagramNodeBox } from './DiagramNodeBox'

function TreeBranch({ node, isRoot = false }: { node: DiagramNode; isRoot?: boolean }) {
  const hasChildren = Boolean(node.children && node.children.length > 0)

  return (
    <div className="flex flex-col items-center">
      <DiagramNodeBox node={node} emphasized={isRoot} />
      {hasChildren && (
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-4">
          {node.children!.map((child) => (
            <div key={child.id} className="flex flex-col items-center">
              <div className="h-6 w-px bg-border" />
              <TreeBranch node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function TreeDiagram({ root }: { root: DiagramNode }) {
  return <TreeBranch node={root} isRoot />
}
