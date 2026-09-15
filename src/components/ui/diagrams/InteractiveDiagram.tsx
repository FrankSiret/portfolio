import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { type LayoutBox, type LayoutConnector, SvgDiagramBox, SvgDiagramConnector } from './svgDiagram'
import { Tag } from '@/components/ui/Tag'

interface InteractiveDiagramProps {
  boxes: LayoutBox[]
  connectors: LayoutConnector[]
  viewW: number
  viewH: number
  ariaLabel: string
  hint?: string
  /** Panel section headers — override when "Responsibilities / Engineering concerns" doesn't fit the content (e.g. an academic diagram). */
  primaryLabel?: string
  secondaryLabel?: string
}

/** Renders a laid-out diagram where any node carrying `detail` can be clicked to reveal a panel below it. */
export function InteractiveDiagram({
  boxes,
  connectors,
  viewW,
  viewH,
  ariaLabel,
  hint = 'Components marked with a dot can be clicked for detail.',
  primaryLabel = 'Responsibilities',
  secondaryLabel = 'Engineering concerns',
}: InteractiveDiagramProps) {
  const uid = useId()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedBox = boxes.find((box) => box.node.id === selectedId)
  const hasInteractive = boxes.some((box) => box.node.detail)

  return (
    <div className="flex flex-col gap-4">
      <svg viewBox={`0 0 ${viewW} ${viewH}`} className="w-full" role="img" aria-label={ariaLabel}>
        {connectors.map((connector, index) => (
          <SvgDiagramConnector key={connector.id} connector={connector} index={index} uid={uid} animate />
        ))}
        {boxes.map((box) => (
          <SvgDiagramBox
            key={box.node.id}
            box={box}
            selected={box.node.id === selectedId}
            onClick={
              box.node.detail
                ? () => setSelectedId((prev) => (prev === box.node.id ? null : box.node.id))
                : undefined
            }
          />
        ))}
      </svg>

      <AnimatePresence mode="wait">
        {selectedBox?.node.detail ? (
          <motion.div
            key={selectedBox.node.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="rounded-md border border-accent/30 bg-accent/5 p-4"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">{selectedBox.node.label}</p>

            {selectedBox.node.detail.responsibilities && selectedBox.node.detail.responsibilities.length > 0 && (
              <div className="mt-3">
                <p className="text-[11px] uppercase tracking-wide text-muted">{primaryLabel}</p>
                <ul className="mt-1.5 flex flex-col gap-1.5">
                  {selectedBox.node.detail.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedBox.node.detail.concerns && selectedBox.node.detail.concerns.length > 0 && (
              <div className="mt-3">
                <p className="text-[11px] uppercase tracking-wide text-muted">{secondaryLabel}</p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {selectedBox.node.detail.concerns.map((concern) => (
                    <Tag key={concern}>{concern}</Tag>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : hasInteractive ? (
          <p className="text-center font-mono text-[11px] text-muted">{hint}</p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
