import { cn } from '@/lib/cn'

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-bg px-3 py-1 font-mono text-xs text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
