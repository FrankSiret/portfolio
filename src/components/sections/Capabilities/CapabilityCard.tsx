import { motion } from 'framer-motion'
import type { CapabilityCategory } from '@/types'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { getIcon } from '@/lib/icons'
import { fadeUp } from '@/lib/motion'

export function CapabilityCard({ category }: { category: CapabilityCategory }) {
  const Icon = getIcon(category.icon)

  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full">
        <Icon className="h-5 w-5 text-accent" />
        <h3 className="mt-4 font-semibold text-text">{category.title}</h3>
        <p className="mt-2 text-sm text-muted">{category.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
