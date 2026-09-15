import { motion } from 'framer-motion'
import type { DNAPrinciple } from '@/types'
import { Card } from '@/components/ui/Card'
import { fadeUp } from '@/lib/motion'

export function DNACard({ principle }: { principle: DNAPrinciple }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">{principle.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{principle.description}</p>
      </Card>
    </motion.div>
  )
}
