import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ProblemSolvingCard as ProblemSolvingCardData } from '@/types'
import { Card } from '@/components/ui/Card'
import { StatCounter } from '@/components/ui/StatCounter'
import { fadeUp } from '@/lib/motion'

export function ProblemSolvingCard({ card }: { card: ProblemSolvingCardData }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="flex h-full flex-col">
        <h3 className="font-semibold text-text">{card.title}</h3>
        <p className="mt-2 flex-1 text-sm italic text-muted">{card.quote}</p>

        {card.stats && (
          <div className="mt-4 space-y-2">
            {card.stats.map((stat) => (
              <StatCounter key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        )}

        {card.url ? (
          <a
            href={card.url}
            target={card.url.startsWith('#') ? undefined : '_blank'}
            rel={card.url.startsWith('#') ? undefined : 'noreferrer'}
            className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
          >
            {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted/60">
            {card.linkLabel} — link coming soon
          </span>
        )}
      </Card>
    </motion.div>
  )
}
