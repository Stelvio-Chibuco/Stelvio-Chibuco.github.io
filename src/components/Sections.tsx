import { motion } from 'motion/react'
import { ArrowUpRight, BookOpen, LayoutDashboard, Mail, Mic, Plug, ScanFace, Store } from 'lucide-react'
import { about, certifications, education, experience, process, profile, services, skills, spokenLanguages, ui, writing } from '../content'
import { useT } from '../i18n'
import { asset, GithubIcon, LinkedinIcon, reveal, SectionHead, waLink, WhatsappIcon } from './util'

const ICONS = { store: Store, layout: LayoutDashboard, plug: Plug, scan: ScanFace }

export function Services() {
  const tr = useT()
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHead eyebrow={tr(ui.servicesEyebrow)} title={tr(ui.servicesTitle)} />
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS]
          return (
            <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }} className="card group relative overflow-hidden p-7 transition hover:border-amber-400/30">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-amber-500/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-300/20 to-orange-500/20 text-amber-300 ring-1 ring-white/10">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{tr(s.title)}</h3>
              <p className="mt-2 text-zinc-400">{tr(s.text)}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.h3 {...reveal} className="mb-6 mt-16 font-display text-xl font-semibold text-white">{tr(ui.processTitle)}</motion.h3>
      <ol className="grid gap-4 md:grid-cols-4">
        {process.map((p, i) => (
          <motion.li key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="card p-5">
            <span className="font-display text-sm font-bold text-amber-glow">0{i + 1}</span>
            <p className="mt-2 font-semibold text-white">{tr(p.title)}</p>
            <p className="mt-1 text-sm text-zinc-400">{tr(p.text)}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}

function Timeline({ items }: { items: { title: string; org: string; period: string; text: string; logo?: string }[] }) {
  return (
    <ol className="relative space-y-6 border-l border-white/10 pl-6">
      {items.map((it, i) => (
        <motion.li key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="relative">
          <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-amber-glow ring-4 ring-ink-950" />
          <div className="flex items-start gap-3">
            {it.logo ? (
              <img src={asset(it.logo)} alt="" className="size-10 shrink-0 rounded-xl bg-white object-contain p-1" loading="lazy" />
            ) : (
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-glow font-display text-xs font-bold text-ink-950">SC</span>
            )}
            <div>
              <p className="font-semibold text-white">{it.title}</p>
              <p className="text-sm text-zinc-400">{it.org} · <span className="text-zinc-500">{it.period}</span></p>
              <p className="mt-1.5 text-sm text-zinc-400">{it.text}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}

export function About() {
  const tr = useT()
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHead eyebrow={tr(ui.aboutEyebrow)} title={tr(ui.aboutTitle)} text={tr(about)} />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 font-display text-lg font-semibold text-white">{tr(ui.experience)}</h3>
          <Timeline items={experience.map((e) => ({ title: tr(e.role), org: e.org === 'Independent' ? (tr({ en: 'Independent', pt: 'Independente' })) : e.org, period: tr(e.period), text: tr(e.text), logo: e.logo }))} />
        </div>
        <div className="space-y-10">
          <div>
            <h3 className="mb-6 font-display text-lg font-semibold text-white">{tr(ui.education)}</h3>
            <Timeline items={education.map((e) => ({ title: tr(e.title), org: e.org, period: e.period, text: tr(e.text), logo: e.logo }))} />
          </div>
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{tr(ui.languages)}</h3>
            <div className="flex flex-wrap gap-2">
              {spokenLanguages.map((l) => (
                <span key={tr(l.name)} className="chip">{tr(l.name)} · <span className="ml-1 text-zinc-500">{tr(l.level)}</span></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-6 mt-20 font-display text-lg font-semibold text-white">{tr(ui.skillsTitle)}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.04 }} className="card p-5">
            <p className="mb-3 text-sm font-semibold text-amber-300">{tr(g.group)}</p>
            <div className="flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="chip">{s}</span>)}</div>
          </motion.div>
        ))}
      </div>

      <h3 className="mb-6 mt-20 font-display text-lg font-semibold text-white">{tr(ui.certsTitle)} · Cisco Networking Academy</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <motion.a key={c.url} {...reveal} transition={{ ...reveal.transition, delay: i * 0.04 }} href={c.url} target="_blank" rel="noreferrer" className="card group flex flex-col items-center p-5 text-center transition hover:border-amber-400/30">
            <img src={asset(c.img)} alt="" className="size-20 object-contain transition group-hover:scale-105" loading="lazy" />
            <p className="mt-3 text-sm font-semibold text-white">{tr(c.title)}</p>
            <p className="text-xs text-zinc-500">{c.year}</p>
            <span className="mt-2 flex items-center gap-1 text-xs text-amber-300 opacity-0 transition group-hover:opacity-100">{tr(ui.certView)} <ArrowUpRight className="size-3" /></span>
          </motion.a>
        ))}
      </div>

      <h3 className="mb-6 mt-20 font-display text-lg font-semibold text-white">{tr(ui.writingTitle)}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {writing.map((w) => (
          <a key={w.url} href={w.url} target="_blank" rel="noreferrer" className="card group flex items-center gap-4 p-4 transition hover:border-amber-400/30">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-amber-300">
              {w.kind.en === 'Talk' ? <Mic className="size-5" /> : <BookOpen className="size-5" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs uppercase tracking-wider text-zinc-500">{tr(w.kind)}</span>
              <span className="block text-sm font-medium text-white">{tr(w.title)}</span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-white" />
          </a>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  const tr = useT()
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6">
      <motion.div {...reveal} className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-500/15 via-orange-500/5 to-transparent px-6 py-16 text-center sm:px-16">
        <div className="noise absolute inset-0 -z-10 opacity-60" />
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{tr(ui.contactTitle)}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">{tr(ui.contactText)}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink(tr(ui.waMessage))} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-ink-950 transition hover:bg-emerald-400">
            <WhatsappIcon className="size-5" /> {tr(ui.whatsapp)}
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-ink-950/40 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
            <Mail className="size-5" /> {tr(ui.email)}
          </a>
        </div>
        <p className="mt-6 text-sm text-zinc-400">{profile.email} · {profile.phoneDisplay}</p>
      </motion.div>
      <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {tr(ui.footer)}</p>
        <div className="flex items-center gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><GithubIcon className="size-5" /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><LinkedinIcon className="size-5" /></a>
          <a href={profile.links.blog} target="_blank" rel="noreferrer" aria-label="Blog" className="hover:text-white"><BookOpen className="size-5" /></a>
        </div>
      </footer>
    </section>
  )
}
