import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TerminalProps {
  children: ReactNode
  className?: string
  onClose?: () => void
}

export function Terminal({ children, className, onClose }: TerminalProps) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-border bg-surface font-mono text-sm', className)}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="h-2.5 w-2.5 rounded-full bg-muted/30 transition-colors hover:bg-[#FF5F57] disabled:cursor-default"
          disabled={!onClose}
        />
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}
