import { motion } from 'framer-motion'
import type { DiagramNode } from '@/types'
import { fadeUp } from '@/lib/motion'
import { getIcon } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function DiagramNodeBox({ node, emphasized = false }: { node: DiagramNode; emphasized?: boolean }) {
  const Icon = node.icon ? getIcon(node.icon) : null

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'flex min-w-[9rem] flex-col items-center gap-1 rounded-md border px-4 py-3 text-center',
        emphasized ? 'border-accent/40 bg-accent/5' : 'border-border bg-surface',
      )}
    >
      {Icon && <Icon className="mb-1 h-4 w-4 text-accent" />}
      <span className="font-mono text-xs font-medium uppercase tracking-wide text-text">{node.label}</span>
      {node.sublabel && <span className="font-mono text-[11px] text-muted">{node.sublabel}</span>}
    </motion.div>
  )
}
