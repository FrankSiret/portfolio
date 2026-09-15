import { cn } from '@/lib/cn'

export function Badge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
