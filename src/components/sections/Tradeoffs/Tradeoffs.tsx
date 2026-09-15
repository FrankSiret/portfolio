import { motion } from 'framer-motion'
import tradeoffsData from '@/data/tradeoffs.json'
import type { TradeoffsData } from '@/types'
import { Section } from '@/components/ui/Section'
import { TradeoffCard } from './TradeoffCard'
import { staggerContainer, viewportOnce } from '@/lib/motion'

const tradeoffs = tradeoffsData as TradeoffsData

export function Tradeoffs() {
  return (
    <Section id="tradeoffs" eyebrow="Engineering Trade-offs" title={tradeoffs.heading} subtitle={tradeoffs.subtitle}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {tradeoffs.items.map((item) => (
          <TradeoffCard key={item.id} tradeoff={item} />
        ))}
      </motion.div>
    </Section>
  )
}
