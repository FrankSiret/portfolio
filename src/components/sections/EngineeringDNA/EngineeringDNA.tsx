import { motion } from 'framer-motion'
import dnaData from '@/data/dna.json'
import type { DNAData } from '@/types'
import { Section } from '@/components/ui/Section'
import { DNACard } from './DNACard'
import { staggerContainer, viewportOnce } from '@/lib/motion'

const dna = dnaData as DNAData

export function EngineeringDNA() {
  return (
    <Section id="dna" eyebrow={dna.subtitle} title={dna.heading}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {dna.principles.map((principle) => (
          <DNACard key={principle.id} principle={principle} />
        ))}
      </motion.div>
    </Section>
  )
}
