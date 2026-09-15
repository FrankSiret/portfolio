import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

const baseStyles =
  'inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
  primary: 'bg-accent text-bg hover:bg-accent/90',
  secondary: 'border border-border text-text hover:border-accent/50 hover:text-accent',
  ghost: 'text-muted hover:text-text',
}

interface CommonProps {
  variant?: keyof typeof variants
  children: ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({
  variant = 'primary',
  children,
  className,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
