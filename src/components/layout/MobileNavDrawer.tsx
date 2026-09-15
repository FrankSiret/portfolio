import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import siteData from '@/data/site.json'
import type { SiteData } from '@/types'
import { getIcon } from '@/lib/icons'
import { LinkButton } from '@/components/ui/Button'

const site = siteData as SiteData

export function MobileNavDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col gap-8 border-l border-border bg-surface px-6 py-6 lg:hidden h-fit"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-text">Menu</span>
              <button type="button" onClick={onClose} aria-label="Close menu" className="text-muted hover:text-text">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="font-mono text-sm tracking-wide text-text hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5">
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
                      className="text-muted hover:text-text"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
              <LinkButton href={site.ctaHref} variant="secondary" className="justify-center">
                {site.ctaLabel} →
              </LinkButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
