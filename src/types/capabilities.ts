import type { IconName } from './common'

export interface CapabilityCategory {
  id: string
  title: string
  icon: IconName
  description: string
  tags: string[]
}

export interface CapabilitiesData {
  heading: string
  subtitle: string
  categories: CapabilityCategory[]
}
