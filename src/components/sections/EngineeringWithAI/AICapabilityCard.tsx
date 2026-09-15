import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import type { AICapability } from '@/types'
import { Card } from '@/components/ui/Card'
import { fadeUp } from '@/lib/motion'

export function AICapabilityCard({ capability }: { capability: AICapability }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">{capability.title}</h3>
        <p className="mt-2 text-sm text-muted">{capability.tagline}</p>
        <ol className="mt-4 flex flex-col items-start gap-1">
          {capability.flow.map((step, index) => (
            <li key={step} className="flex flex-col items-start gap-1">
              {index > 0 && <ArrowDown className="h-3 w-3 text-muted/60" />}
              <span className="font-mono text-xs text-text">{step}</span>
            </li>
          ))}
        </ol>
      </Card>
    </motion.div>
  )
}
