interface StatCounterProps {
  label: string
  value: string | number | null
}

export function StatCounter({ label, value }: StatCounterProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-border pt-3 font-mono text-sm">
      <span className="text-muted">{label}</span>
      <span className={value === null ? 'text-muted/60' : 'text-accent'}>
        {value === null ? 'coming soon' : value}
      </span>
    </div>
  )
}
