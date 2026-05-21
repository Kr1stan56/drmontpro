"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Lang, TranslationKeys } from "./translations"
import { getTranslations } from "./translations"

const LangContext = createContext<{
  lang: Lang
  t: TranslationKeys
  toggleLang: () => void
} | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sl")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "sl" ? "en" : "sl"))
  }, [])

  return (
    <LangContext.Provider value={{ lang, t: getTranslations(lang), toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
