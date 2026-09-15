export type IconName =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'stack-overflow'
  | 'instagram'
  | 'mail'
  | 'file-text'
  | 'arrow-right'
  | 'external-link'
  | 'code'
  | 'server'
  | 'database'
  | 'calendar-check'
  | 'cloud'
  | 'cpu'
  | 'layers'
  | 'shield'
  | 'terminal'
  | 'puzzle'
  | 'coffee'
  | 'fish'
  | 'plane'
  | 'music'
  | 'wand'
  | 'amphora'
  | 'book-open'
  | 'target'
  | 'trophy'
  | 'users'
  | 'compass'
  | 'brain'
  | 'sparkles'

export interface SocialLink {
  label: string
  url: string
  icon: IconName
}

export interface NavLink {
  label: string
  href: string
}

/** Kept as strings ("10+", "6") to preserve CV formatting exactly. */
export interface Rating {
  years: string
  stars: 1 | 2 | 3 | 4 | 5
}

export interface Period {
  start: string
  end: string
}
