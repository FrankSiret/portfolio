import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Terminal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-border bg-surface font-mono text-sm', className)}>
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}
