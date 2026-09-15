import type { NavLink, SocialLink } from './common'

export interface SiteData {
  meta: {
    title: string
    description: string
  }
  nav: NavLink[]
  socialLinks: SocialLink[]
  cvUrl: string
  ctaLabel: string
  ctaHref: string
}
