import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile, ui } from '../content'
import { useLang, useT } from '../i18n'
import { asset, waLink } from './util'

export function Monogram() {
  return <img src={asset('/img/logo.webp')} alt="cybergorilla" width={40} height={40} className="size-10 rounded-full shadow-lg shadow-sky-900/40" />
}

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs font-semibold" role="group" aria-label="Language">
      {(['en', 'pt'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition ${lang === l ? 'bg-white text-ink-950' : 'text-zinc-400 hover:text-white'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Nav() {
  const tr = useT()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const links = [
    { href: '#work', label: tr(ui.nav.work) },
    { href: '#services', label: tr(ui.nav.services) },
    { href: '#about', label: tr(ui.nav.about) },
    { href: '#contact', label: tr(ui.nav.contact) },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold text-white">
          <Monogram />
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:text-white">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <a href={waLink(tr(ui.waMessage))} target="_blank" rel="noreferrer" className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-amber-200 sm:inline-flex">
            {tr(ui.nav.hire)}
          </a>
          <button className="rounded-lg p-2 text-zinc-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-b border-white/5 bg-ink-950/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col px-4 pb-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5">{l.label}</a>
              ))}
              <a href={waLink(tr(ui.waMessage))} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-white px-4 py-3 text-center font-semibold text-ink-950">{tr(ui.nav.hire)}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
