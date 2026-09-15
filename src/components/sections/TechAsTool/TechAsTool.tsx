import { motion } from 'framer-motion'
import techAsToolData from '@/data/techAsTool.json'
import type { TechAsToolData } from '@/types'
import { Section } from '@/components/ui/Section'
import { StagedDiagram } from '@/components/ui/diagrams/StagedDiagram'
import { Quote } from '@/components/ui/Quote'
import { ScenarioCard } from './ScenarioCard'
import { staggerContainer, viewportOnce } from '@/lib/motion'

const techAsTool = techAsToolData as TechAsToolData

export function TechAsTool() {
  return (
    <Section id="tech-as-tool" eyebrow="Philosophy" title={techAsTool.heading} subtitle={techAsTool.subtitle}>
      <div className="mx-auto max-w-xl">
        <StagedDiagram spec={techAsTool.diagram} ariaLabel="From problem to constraints to technology choices" />
      </div>

      <Quote className="mx-auto mt-10 max-w-xl text-center">{techAsTool.quote}</Quote>

      <h3 className="mb-4 mt-14 text-center font-mono text-xs uppercase tracking-wide text-muted">
        {techAsTool.scenariosHeading}
      </h3>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {techAsTool.scenarios.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </motion.div>
    </Section>
  )
}
