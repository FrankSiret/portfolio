import { cn } from '@/lib/cn'

export function Quote({ children, className }: { children: string; className?: string }) {
  return (
    <p className={cn('border-l-2 border-accent/40 pl-4 font-mono text-sm italic text-muted', className)}>
      {children}
    </p>
  )
}
