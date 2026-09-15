import { AnimatePresence, motion } from 'framer-motion'
import { Terminal as TerminalIcon, X } from 'lucide-react'
import consoleData from '@/data/console.json'
import type { ConsoleData } from '@/types'
import { Terminal } from '@/components/ui/Terminal'
import { useDisclosure } from '@/hooks/useDisclosure'

const consoleContent = consoleData as ConsoleData

export function EngineeringConsole() {
  const { isOpen, toggle, close } = useDisclosure(false)

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle engineering console"
        className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-lg transition-colors hover:border-accent/50"
      >
        {isOpen ? <X className="h-4 w-4" /> : <TerminalIcon className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-20 right-5 z-30 w-[calc(100vw-2.5rem)] max-w-sm"
          >
            <Terminal onClose={close}>
              <p className="text-accent">{consoleContent.commandLabel}</p>
              <div className="mt-3 flex flex-col gap-3 text-muted">
                <div>
                  <p className="text-text">Role:</p>
                  <p className="pl-3">{consoleContent.role}</p>
                </div>
                <div>
                  <p className="text-text">Primary:</p>
                  {consoleContent.primary.map((item) => (
                    <p key={item} className="pl-3">{item}</p>
                  ))}
                </div>
                <div>
                  <p className="text-text">Secondary:</p>
                  {consoleContent.secondary.map((item) => (
                    <p key={item} className="pl-3">{item}</p>
                  ))}
                </div>
                <div>
                  <p className="text-text">Mindset:</p>
                  {consoleContent.mindset.map((item) => (
                    <p key={item} className="pl-3">{item}</p>
                  ))}
                </div>
                <div>
                  <p className="text-text">Status:</p>
                  <p className="pl-3 text-accent">{consoleContent.status}</p>
                </div>
              </div>
            </Terminal>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop tap-to-close on mobile */}
      {isOpen && <div className="fixed inset-0 z-20" onClick={close} />}
    </>
  )
}
