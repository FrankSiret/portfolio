import { type ReactNode } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { EngineeringConsole } from '@/components/sections/EngineeringConsole/EngineeringConsole'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>{children}</main>
      <Footer />
      <EngineeringConsole />
    </div>
  )
}
