import type { ICPCAward } from '@/types'
import { ExternalLink } from 'lucide-react'

export function AwardsTable({ awards }: { awards: ICPCAward[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface text-xs uppercase tracking-wide text-muted">
            <th className="px-4 py-3 font-medium">Award</th>
            <th className="px-4 py-3 font-medium">Date</th>
            <th className="px-4 py-3 font-medium">Location</th>
            <th className="px-4 py-3 font-medium">Place</th>
            <th className="px-4 py-3 font-medium">Team</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award) => (
            <tr key={award.award} className="border-b border-border last:border-b-0">
              <td className="px-4 py-3 text-text">
                {award.url ? (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    {award.award}
                    <ExternalLink className="h-3 w-3 shrink-0" />
                  </a>
                ) : (
                  award.award
                )}
              </td>
              <td className="px-4 py-3 font-mono text-muted">{award.date}</td>
              <td className="px-4 py-3 text-muted">{award.location}</td>
              <td className="px-4 py-3 font-mono text-accent">{award.place}</td>
              <td className="px-4 py-3 text-muted">{award.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
