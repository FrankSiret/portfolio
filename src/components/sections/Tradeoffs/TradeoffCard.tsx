import { motion } from 'framer-motion'
import type { Tradeoff } from '@/types'
import { ExpandableCard } from '@/components/ui/ExpandableCard'
import { fadeUp } from '@/lib/motion'

export function TradeoffCard({ tradeoff }: { tradeoff: Tradeoff }) {
  return (
    <motion.div variants={fadeUp}>
      <ExpandableCard title={tradeoff.title} summary={<p className="mt-1 text-xs text-muted">{tradeoff.question}</p>}>
        <p className="text-sm leading-relaxed text-muted">{tradeoff.answer}</p>
      </ExpandableCard>
    </motion.div>
  )
}
