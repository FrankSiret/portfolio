import { motion } from 'framer-motion'
import type { Hobby } from '@/types'
import { Card } from '@/components/ui/Card'
import { getIcon } from '@/lib/icons'
import { fadeUp } from '@/lib/motion'

export function HobbyCard({ hobby }: { hobby: Hobby }) {
  const Icon = getIcon(hobby.icon)

  return (
    <motion.div variants={fadeUp}>
      <Card className="h-full">
        <Icon className="h-5 w-5 text-accent" />
        <h3 className="mt-3 font-semibold text-text">{hobby.title}</h3>
        <p className="mt-2 text-sm text-muted">{hobby.quote}</p>
      </Card>
    </motion.div>
  )
}
