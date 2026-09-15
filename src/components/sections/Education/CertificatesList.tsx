import { ExternalLink } from 'lucide-react'
import type { Certificate, LanguageEntry } from '@/types'

export function CertificatesList({
  heading,
  certificates,
  languages,
}: {
  heading: string
  certificates: Certificate[]
  languages: LanguageEntry[]
}) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-muted">{heading}</h3>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <ul className="flex flex-col gap-2 lg:col-span-2">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm text-text transition-colors hover:border-accent/40 hover:text-accent"
              >
                <span>
                  {cert.title} <span className="text-muted">— {cert.issuer}</span>
                </span>
                <span className="flex items-center gap-2 shrink-0 font-mono text-xs text-muted">
                  {cert.date && <span>{cert.date}</span>} <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2">
          {languages.map((lang) => (
            <div key={lang.language} className="rounded-md border border-border bg-surface px-4 py-3 text-sm">
              <span className="font-semibold text-text">{lang.language}</span>
              <span className="ml-2 text-muted">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
