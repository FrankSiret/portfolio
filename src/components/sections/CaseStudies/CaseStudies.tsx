import { useState } from 'react'
import { motion } from 'framer-motion'
import caseStudiesData from '@/data/caseStudies.json'
import type { CaseStudiesData, CaseStudy } from '@/types'
import { Section } from '@/components/ui/Section'
import { Modal } from '@/components/ui/Modal'
import { CaseStudyCard } from './CaseStudyCard'
import { CaseStudyDetail } from './CaseStudyDetail'
import { staggerContainer, viewportOnce } from '@/lib/motion'

const caseStudies = caseStudiesData as CaseStudiesData

export function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)

  return (
    <Section id="case-studies" eyebrow="Selected Engineering Challenges" title={caseStudies.heading} subtitle={caseStudies.subtitle}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {caseStudies.studies.map((study) => (
          <CaseStudyCard key={study.id} study={study} onOpen={() => setActiveStudy(study)} />
        ))}
      </motion.div>

      <Modal isOpen={activeStudy !== null} onClose={() => setActiveStudy(null)} title={activeStudy?.title ?? ''}>
        {activeStudy && <CaseStudyDetail study={activeStudy} />}
      </Modal>
    </Section>
  )
}
