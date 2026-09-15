import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import profileData from '@/data/profile.json'
import siteData from '@/data/site.json'
import type { ProfileData, SiteData } from '@/types'
import { LinkButton } from '@/components/ui/Button'
import { HeroArchitectureDiagram } from './HeroArchitectureDiagram'
import { fadeUp, staggerContainer } from '@/lib/motion'

const profile = profileData as ProfileData
const site = siteData as SiteData
const githubLink = site.socialLinks.find((link) => link.icon === 'github')

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto grid max-w-content gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div initial="hidden" animate="show" variants={staggerContainer(0.1)}>
          <motion.p variants={fadeUp} className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {profile.name}
          </motion.p>
          <motion.p variants={fadeUp} className="mb-4 mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {profile.roleLine}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl lg:text-[2.75rem]">
            {profile.headline}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {profile.heroDescription}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 font-mono text-xs tracking-wide text-muted">
            {profile.techLine}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <LinkButton href="#case-studies" variant="primary">
              Explore my work <ArrowRight className="h-4 w-4" />
            </LinkButton>
            {githubLink && (
              <LinkButton href={githubLink.url} target="_blank" rel="noreferrer" variant="secondary">
                <Github className="h-4 w-4" /> GitHub
              </LinkButton>
            )}
          </motion.div>
        </motion.div>

        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 max-w-[560px] w-[stretch] justify-self-center">
          <HeroArchitectureDiagram spec={profile.architectureDiagram} />
        </div>
      </div>
    </section>
  )
}
