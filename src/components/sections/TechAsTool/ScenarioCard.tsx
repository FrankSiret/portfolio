import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { TechScenario } from '@/types'
import { Card } from '@/components/ui/Card'
import { fadeUp } from '@/lib/motion'

export function ScenarioCard({ scenario }: { scenario: TechScenario }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full">
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Problem</p>
        <p className="mt-1 font-semibold text-text">{scenario.problem}</p>
        <ul className="mt-4 flex flex-col gap-1.5">
          {scenario.choices.map((choice) => (
            <li key={choice} className="flex items-center gap-2 text-sm text-muted">
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent" />
              {choice}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
