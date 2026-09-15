import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import hobbiesData from '@/data/hobbies.json'
import type { HobbiesData } from '@/types'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { getIcon } from '@/lib/icons'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion'
import { HobbyCard } from './HobbyCard'

const RubiksCube = lazy(() => import('@/components/three/RubiksCube/RubiksCube'))

const hobbies = hobbiesData as HobbiesData

export function OutsideTheStack() {
  const interactiveHobby = hobbies.hobbies.find((hobby) => hobby.interactive)
  const restHobbies = hobbies.hobbies.filter((hobby) => !hobby.interactive)

  return (
    <Section id="outside-the-stack" eyebrow="Outside the Stack" title={hobbies.heading} subtitle={hobbies.subtitle}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {interactiveHobby && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:row-span-2"
          >
            <Card className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                {(() => {
                  const Icon = getIcon(interactiveHobby.icon)
                  return <Icon className="h-5 w-5 text-accent" />
                })()}
                <h3 className="font-semibold text-text">{interactiveHobby.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">{interactiveHobby.quote}</p>
              <div className="mt-4 flex-1">
                <Suspense
                  fallback={<div className="aspect-square w-full animate-pulse-slow rounded-md bg-surface-hover" />}
                >
                  <RubiksCube />
                </Suspense>
              </div>
              <p className="mt-2 text-center font-mono text-[11px] text-muted">Drag to rotate</p>
            </Card>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2"
        >
          {restHobbies.map((hobby) => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
