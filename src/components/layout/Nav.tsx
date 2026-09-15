import { useState } from 'react'
import { FileText, Menu } from 'lucide-react'
import siteData from '@/data/site.json'
import type { SiteData } from '@/types'
import { getIcon } from '@/lib/icons'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'
import { LinkButton } from '@/components/ui/Button'
import { ThemeToggle } from './ThemeToggle'
import { MobileNavDrawer } from './MobileNavDrawer'

const site = siteData as SiteData

export function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const activeId = useActiveSection(site.nav.map((link) => link.href.replace('#', '')))

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-text">
          frank<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.nav.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'font-mono text-xs tracking-wide transition-colors',
                  isActive ? 'text-accent' : 'text-muted hover:text-text',
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {site.socialLinks.slice(0, 2).map((social) => {
            const Icon = getIcon(social.icon)
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-text"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Download CV"
            className="text-muted transition-colors hover:text-text"
          >
            <FileText className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <LinkButton href={site.ctaHref} variant="secondary" className="px-4 py-2 text-xs">
            {site.ctaLabel} →
          </LinkButton>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            className="text-text"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileNavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  )
}
