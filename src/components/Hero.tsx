import { motion } from 'motion/react'
import { ArrowDown, Download, MapPin, ScanFace, ShieldCheck, Smartphone } from 'lucide-react'
import { profile, ui } from '../content'
import { useT } from '../i18n'
import { asset, GithubIcon, LinkedinIcon, waLink, WhatsappIcon } from './util'

function Collage() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-amber-500/25 via-orange-500/10 to-cyan-500/15 blur-3xl" />
      {/* loja */}
      <motion.figure
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute left-0 top-4 w-[78%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
      >
        <img src={asset('/img/projects/motice-home.webp')} alt="Motice online store" className="w-full" width={1400} height={875} />
      </motion.figure>
      {/* quiosque */}
      <motion.figure
        initial={{ opacity: 0, y: 40, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-2 right-6 w-[68%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
      >
        <img src={asset('/img/projects/saveguard-kiosk.webp')} alt="SaveGuard door kiosk" className="w-full" width={1280} height={800} />
      </motion.figure>
      {/* telemóvel */}
      <motion.figure
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute -right-2 top-0 w-[24%] overflow-hidden rounded-[1.4rem] border-[5px] border-ink-700 bg-ink-800 shadow-2xl shadow-black/70"
      >
        <img src={asset('/img/projects/boleia-driver.webp')} alt="Boleia+ driver app" className="w-full" width={540} height={1209} />
      </motion.figure>
      {/* selos */}
      <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="absolute -left-3 bottom-16 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur">
        <Smartphone className="size-4 text-amber-glow" /> M-Pesa · e-Mola · PayPal
      </motion.span>
      <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="absolute -bottom-3 left-1/3 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur">
        <ScanFace className="size-4 text-cyan-300" /> Face recognition &lt; 1s
      </motion.span>
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="absolute right-[26%] top-[38%] hidden items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur sm:flex">
        <ShieldCheck className="size-4 text-emerald-300" /> SOS · GPS · PostGIS
      </motion.span>
    </div>
  )
}

export function Hero() {
  const tr = useT()
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div className="noise absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-0 -z-10 h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-amber-500/[0.07] blur-[120px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-emerald-400" /></span>
            {tr(ui.available)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.7 }} className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {tr(ui.heroTitle[0])} <span className="gradient-text">{tr(ui.heroTitle[1])}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {tr(ui.heroText)}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-glow px-6 py-3 font-semibold text-ink-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110">
              {tr(ui.seeWork)} <ArrowDown className="size-4" />
            </a>
            <a href={waLink(tr(ui.waMessage))} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
              <WhatsappIcon className="size-4 text-emerald-400" /> {tr(ui.whatsapp)}
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5"><MapPin className="size-4" /> {tr(profile.location)}</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white"><GithubIcon className="size-4" /> GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white"><LinkedinIcon className="size-4" /> LinkedIn</a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white"><Download className="size-4" /> {tr(ui.cv)}</a>
          </motion.div>
        </div>
        <Collage />
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-4">
          {ui.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-ink-950 px-6 py-7">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{tr(s.label)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
