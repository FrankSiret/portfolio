import siteData from '@/data/site.json'
import profileData from '@/data/profile.json'
import type { SiteData, ProfileData } from '@/types'
import { getIcon } from '@/lib/icons'
import { LinkButton } from '@/components/ui/Button'

const site = siteData as SiteData
const profile = profileData as ProfileData

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto flex max-w-content flex-col items-start gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-xl font-semibold text-text sm:text-2xl">Still solving problems.</h2>
          <p className="mt-3 max-w-md text-sm text-muted">
            If you have a difficult system, an interesting architecture problem, or simply want to talk engineering.
          </p>
        </div>

        <LinkButton href={site.ctaHref} variant="primary">
          {site.ctaLabel} →
        </LinkButton>

        <div className="flex w-full flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-wide text-muted">{profile.techLine}</p>

          <div className="flex items-center gap-4">
            {site.socialLinks.map((social) => {
              const Icon = getIcon(social.icon)
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono italic">Built with curiosity. Optimized with reason.</p>
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
