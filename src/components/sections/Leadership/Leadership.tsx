import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import leadershipData from '@/data/leadership.json'
import type { LeadershipData } from '@/types'
import { Section } from '@/components/ui/Section'
import { Quote } from '@/components/ui/Quote'
import { LeadershipCycleDiagram } from './LeadershipCycleDiagram'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion'

const leadership = leadershipData as LeadershipData

export function Leadership() {
  return (
    <Section id="leadership" eyebrow={leadership.subtitle} title={leadership.heading}>
      <div className="mx-auto max-w-xl">
        <LeadershipCycleDiagram spec={leadership.diagram} />
      </div>

      <Quote className="mx-auto mt-10 max-w-2xl">{leadership.quote}</Quote>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.06)}
        className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {leadership.bullets.map((bullet) => (
          <motion.li key={bullet} variants={fadeUp} className="flex items-start gap-2 text-sm text-text">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {bullet}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
