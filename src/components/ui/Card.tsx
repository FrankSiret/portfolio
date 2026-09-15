import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-muted/40',
        className,
      )}
      {...props}
    />
  )
}
