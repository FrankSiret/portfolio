import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import type { DiagramNode, DiagramOrientation } from '@/types'
import { DiagramNodeBox } from './DiagramNodeBox'
import { fadeUp } from '@/lib/motion'

function flattenChain(node: DiagramNode): DiagramNode[] {
  const chain = [node]
  let current = node
  while (current.children && current.children.length > 0) {
    current = current.children[0]
    chain.push(current)
  }
  return chain
}

export function FlowChain({ root, orientation }: { root: DiagramNode; orientation: DiagramOrientation }) {
  const nodes = flattenChain(root)
  const isHorizontal = orientation === 'horizontal'

  return (
    <div className={isHorizontal ? 'flex flex-col items-stretch gap-3 md:flex-row md:items-center' : 'flex flex-col items-stretch gap-3'}>
      {nodes.map((node, index) => (
        <div key={node.id} className={isHorizontal ? 'flex flex-col items-center gap-3 md:flex-row' : 'flex flex-col items-center gap-3'}>
          <DiagramNodeBox node={node} />
          {index < nodes.length - 1 && (
            <motion.div variants={fadeUp} className="flex shrink-0 justify-center text-muted">
              {isHorizontal ? (
                <>
                  <ArrowDown className="h-4 w-4 md:hidden" />
                  <ArrowRight className="hidden h-4 w-4 md:block" />
                </>
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
