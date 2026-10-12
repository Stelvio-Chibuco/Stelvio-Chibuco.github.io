import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects, ui, type Project } from '../content'
import { useT } from '../i18n'
import { asset, reveal, SectionHead } from './util'

function Gallery({ project, onOpen }: { project: Project; onOpen: (src: string, alt: string) => void }) {
  const tr = useT()
  const [active, setActive] = useState(0)
  const main = project.images[active]!
  return (
    <div>
      <button
        onClick={() => onOpen(asset(main.src), tr(main.alt))}
        className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
        aria-label={tr(main.alt)}
      >
        <div className="absolute inset-0 opacity-30 blur-2xl" style={{ background: `radial-gradient(ellipse at center, ${project.accent}, transparent 70%)` }} />
        <div className={`relative flex aspect-[16/10] items-center justify-center ${main.phone ? 'p-4' : ''}`} style={main.contain ? { background: main.contain } : undefined}>
          <AnimatePresence mode="wait">
            <motion.img
              key={main.src}
              src={asset(main.src)}
              alt={tr(main.alt)}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={main.phone ? 'h-full rounded-[1.2rem] border-4 border-ink-700 object-contain shadow-2xl' : main.contain ? 'size-full object-contain' : 'size-full object-cover object-top transition duration-500 group-hover:scale-[1.02]'}
            />
          </AnimatePresence>
        </div>
      </button>
      {project.images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={tr(img.alt)}
              aria-pressed={i === active}
              className={`h-14 w-20 overflow-hidden rounded-lg border transition ${i === active ? 'border-amber-glow' : 'border-white/10 opacity-60 hover:opacity-100'}`}
            >
              <img src={asset(img.src)} alt="" loading="lazy" className="size-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCase({ project, index, onOpen }: { project: Project; index: number; onOpen: (src: string, alt: string) => void }) {
  const tr = useT()
  const flip = index % 2 === 1
  return (
    <motion.article {...reveal} className="card grid items-start gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <div className={flip ? 'lg:order-2' : ''}>
        <Gallery project={project} onOpen={onOpen} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: project.accent }}>{tr(project.kind)}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{project.name}</h3>
        <p className="mt-2 text-lg text-zinc-300">{tr(project.tagline)}</p>

        <p className="mt-6 text-sm font-semibold text-white">{tr(ui.problem)}</p>
        <p className="mt-1 text-zinc-400">{tr(project.problem)}</p>

        <p className="mt-5 text-sm font-semibold text-white">{tr(ui.built)}</p>
        <ul className="mt-2 space-y-2">
          {project.built.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-zinc-400">
              <Check className="mt-1 size-4 shrink-0" style={{ color: project.accent }} />
              <span>{tr(b)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
                {tr(l.label)} <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function Projects() {
  const tr = useT()
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHead eyebrow={tr(ui.workEyebrow)} title={tr(ui.workTitle)} text={tr(ui.workText)} />
      <div className="space-y-8">
        {projects.map((p, i) => <ProjectCase key={p.id} project={p} index={i} onOpen={(src, alt) => setLightbox({ src, alt })} />)}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-ink-950/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Close"><X className="size-5" /></button>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} src={lightbox.src} alt={lightbox.alt} className="max-h-[88vh] max-w-full rounded-2xl border border-white/10 shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
