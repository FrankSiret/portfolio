import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-20 sm:py-28', className)}>
      <div className={cn('mx-auto max-w-content px-4 sm:px-6 lg:px-8', containerClassName)}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-3 text-base text-muted">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
