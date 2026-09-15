import { motion } from 'framer-motion'
import capabilitiesData from '@/data/capabilities.json'
import type { CapabilitiesData } from '@/types'
import { Section } from '@/components/ui/Section'
import { CapabilityCard } from './CapabilityCard'
import { staggerContainer, viewportOnce } from '@/lib/motion'

const capabilities = capabilitiesData as CapabilitiesData

export function Capabilities() {
  return (
    <Section id="capabilities" eyebrow={capabilities.subtitle} title={capabilities.heading}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {capabilities.categories.map((category) => (
          <CapabilityCard key={category.id} category={category} />
        ))}
      </motion.div>
    </Section>
  )
}
