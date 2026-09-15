import experienceData from '@/data/experience.json'
import type { ExperienceData } from '@/types'
import { AccordionItem } from '@/components/ui/Accordion'
import { Tag } from '@/components/ui/Tag'

const experience = experienceData as ExperienceData

export function CareerTimeline() {
  return (
    <div className="flex flex-col gap-3">
      {experience.entries.map((entry, index) => (
        <AccordionItem
          key={entry.id}
          defaultOpen={index === 0}
          header={
            <div>
              <p className="font-semibold text-text">
                {entry.role} · <span className="text-muted">{entry.company}</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                {entry.period.start} – {entry.period.end}
              </p>
            </div>
          }
        >
          <ul className="flex flex-col gap-2">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>
          {entry.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          )}
        </AccordionItem>
      ))}
    </div>
  )
}
