import type { CaseStudy } from '@/types'
import { CaseStudyArchitectureDiagram } from './CaseStudyArchitectureDiagram'
import { Tag } from '@/components/ui/Tag'

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">{study.contextNote}</p>
      </div>

      <div>
        <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-accent">Problem</h4>
        <p className="text-sm leading-relaxed text-text">{study.problem}</p>
      </div>

      <div>
        <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-accent">Constraints</h4>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {study.constraints.map((constraint) => (
            <li key={constraint} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {constraint}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">Architecture</h4>
        <CaseStudyArchitectureDiagram spec={study.architecture} />
      </div>

      <div>
        <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">Engineering Decisions</h4>
        <div className="flex flex-col gap-4">
          {study.decisions.map((decision) => (
            <div key={decision.question} className="rounded-md border border-border bg-bg p-4">
              <p className="font-mono text-sm text-text">{decision.question}</p>
              <p className="mt-2 text-sm text-muted">{decision.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
