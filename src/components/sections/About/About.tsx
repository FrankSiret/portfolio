import profileData from '@/data/profile.json'
import type { ProfileData } from '@/types'
import { Section } from '@/components/ui/Section'
import { Quote } from '@/components/ui/Quote'
import { CareerTimeline } from './CareerTimeline'

const profile = profileData as ProfileData

export function About() {
  return (
    <Section id="about" eyebrow="About" title={profile.positioningStatement}>
      <Quote className="mb-6 max-w-3xl">{profile.consultingQuote}</Quote>
      <p className="max-w-3xl text-base leading-relaxed text-muted">{profile.bio}</p>
      <p className="mt-3 font-mono text-xs text-muted">
        {profile.location} · {profile.email}
      </p>

      <div className="mt-12">
        <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-muted">Career Timeline</h3>
        <CareerTimeline />
      </div>
    </Section>
  )
}
