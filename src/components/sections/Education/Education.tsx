import educationData from '@/data/education.json'
import type { EducationData } from '@/types'
import { Section } from '@/components/ui/Section'
import { Quote } from '@/components/ui/Quote'
import { EducationConstellationDiagram } from './EducationConstellationDiagram'
import { CertificatesList } from './CertificatesList'

const education = educationData as EducationData

export function Education() {
  return (
    <Section id="education" eyebrow={education.subtitle} title={education.heading} subtitle={education.tagline}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {education.degrees.map((degree) => (
          <div key={degree.id} className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-semibold text-text">{degree.title}</h3>
            <p className="mt-1 text-sm text-muted">
              {degree.institutionUrl ? (
                <a href={degree.institutionUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {degree.institution}
                </a>
              ) : (
                degree.institution
              )}
              {' · '}
              <span className="font-mono">{degree.period.start} – {degree.period.end}</span>
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {degree.honors.map((honor) => (
                <li key={honor} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-xl">
        <EducationConstellationDiagram spec={education.constellation} />
      </div>

      <p className="mt-10 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wide text-muted">
        {education.mindsetFlow.map((step, index) => (
          <span key={step} className="flex items-center gap-2">
            {index > 0 && <span className="text-accent">→</span>}
            <span className={index === education.mindsetFlow.length - 1 ? 'text-accent' : undefined}>{step}</span>
          </span>
        ))}
      </p>

      <Quote className="mx-auto mt-10 max-w-md text-center">{education.closingQuote}</Quote>

      <div className="mt-14">
        <CertificatesList
          heading={education.credentialsHeading}
          certificates={education.certificates}
          languages={education.languages}
        />
      </div>
    </Section>
  )
}
