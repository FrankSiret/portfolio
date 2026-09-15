import { motion } from 'framer-motion'
import type { DiagramSpec } from '@/types'
import { FlowChain } from './FlowChain'
import { TreeDiagram } from './TreeDiagram'
import { staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

export function FlowDiagram({ spec, className }: { spec: DiagramSpec; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.06)}
      className={cn('flex justify-center overflow-x-auto py-2', className)}
    >
      {spec.kind === 'chain' ? (
        <FlowChain root={spec.root} orientation={spec.orientation} />
      ) : (
        <TreeDiagram root={spec.root} />
      )}
    </motion.div>
  )
}
