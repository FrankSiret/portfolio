import { motion } from 'framer-motion'
import aiData from '@/data/ai.json'
import type { AIData } from '@/types'
import { Section } from '@/components/ui/Section'
import { StagedDiagram } from '@/components/ui/diagrams/StagedDiagram'
import { Quote } from '@/components/ui/Quote'
import { AICapabilityCard } from './AICapabilityCard'
import { staggerContainer, viewportOnce } from '@/lib/motion'

const ai = aiData as AIData

export function EngineeringWithAI() {
  return (
    <Section id="engineering-with-ai" eyebrow="Engineering with AI" title={ai.heading} subtitle={ai.tagline}>
      <div className="mx-auto max-w-xl">
        <StagedDiagram spec={ai.diagram} ariaLabel="Engineering augmented by AI, converging back into engineering judgment" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {ai.capabilities.map((capability) => (
          <AICapabilityCard key={capability.id} capability={capability} />
        ))}
      </motion.div>

      <Quote className="mx-auto mt-12 max-w-xl text-center">{ai.closingQuote}</Quote>
    </Section>
  )
}
