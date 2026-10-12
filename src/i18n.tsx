import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from './content'

const KEY = 'portfolio.lang'
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })

function initial(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'en' || saved === 'pt') return saved
  } catch { /* sem armazenamento */ }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initial)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(KEY, lang) } catch { /* ignorar */ }
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

/** Devolve o texto na língua activa. */
export function useT() {
  const { lang } = useContext(Ctx)
  return (v: { en: string; pt: string } | string) => (typeof v === 'string' ? v : v[lang])
}

export const useLang = () => useContext(Ctx)
