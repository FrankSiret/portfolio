import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { CaseStudy } from '@/types'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { fadeUp } from '@/lib/motion'

export function CaseStudyCard({ study, onOpen }: { study: CaseStudy; onOpen: () => void }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="flex h-full cursor-pointer flex-col" onClick={onOpen}>
        <p className="font-mono text-xs uppercase tracking-wide text-muted">{study.role}</p>
        <h3 className="mt-2 font-semibold text-text">{study.title}</h3>
        <p className="mt-3 flex-1 text-sm italic text-muted">{study.summaryQuote}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
          Read the case study <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Card>
    </motion.div>
  )
}
