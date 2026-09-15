import { type ReactNode, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Card } from './Card'

interface ExpandableCardProps {
  title: string
  summary?: ReactNode
  children: ReactNode
  className?: string
}

export function ExpandableCard({ title, summary, children, className }: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className={cn('cursor-pointer', className)} onClick={() => setIsOpen((prev) => !prev)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-text">{title}</h3>
          {summary}
        </div>
        <Plus
          className={cn('h-4 w-4 shrink-0 text-accent transition-transform duration-200', isOpen && 'rotate-45')}
        />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
