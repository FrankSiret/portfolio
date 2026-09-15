import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import problemSolvingData from '@/data/problemSolving.json'
import type { ProblemSolvingData } from '@/types'
import { Section } from '@/components/ui/Section'
import { StagedDiagram } from '@/components/ui/diagrams/StagedDiagram'
import { AwardsTable } from '@/components/ui/AwardsTable'
import { AccordionItem } from '@/components/ui/Accordion'
import { Quote } from '@/components/ui/Quote'
import { ProblemSolvingCard } from './ProblemSolvingCard'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion'

const problemSolving = problemSolvingData as ProblemSolvingData

export function ProblemSolving() {
  return (
    <Section id="problem-solving" eyebrow="Problem Solving" title={problemSolving.heading} subtitle={problemSolving.subtitle}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[5fr_3fr]">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {problemSolving.cards.map((card) => (
              <ProblemSolvingCard key={card.id} card={card} />
            ))}
          </motion.div>

          <h3 className="mb-6 mt-14 text-center font-semibold text-text">{problemSolving.comparisonTagline}</h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.06)}
            className="mx-auto flex max-w-xl flex-col gap-2"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 px-1 font-mono text-[11px] uppercase tracking-wide text-muted">
              <span className="text-right">Algorithm</span>
              <span />
              <span>Production</span>
            </div>
            {problemSolving.comparisons.map((pair) => (
              <motion.div
                key={pair.algorithm}
                variants={fadeUp}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-md border border-border bg-surface px-4 py-3 text-sm"
              >
                <span className="text-right text-text">{pair.algorithm}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-text">{pair.production}</span>
              </motion.div>
            ))}
          </motion.div>

          <Quote className="mx-auto mt-12 max-w-xl text-center">{problemSolving.closingQuote}</Quote>
        </div>
        <div className="mx-auto max-w-[450px] w-[stretch] justify-self-center">
          <StagedDiagram spec={problemSolving.chain} ariaLabel="From ICPC through problems, constraints and trade-offs to engineering" />
        </div>
      </div>
      <div id="icpc-awards" className="mt-12 scroll-mt-24">
        <AccordionItem
          header={
            <span className="font-mono text-sm uppercase tracking-wide text-muted">
              {problemSolving.icpcAwardsHeading}
              <span className="ml-2 text-accent">({problemSolving.icpcAwards.length})</span>
            </span>
          }
        >
          <AwardsTable awards={problemSolving.icpcAwards} />
        </AccordionItem>
      </div>
    </Section>
  )
}
