"use client"

import { LangProvider } from "@/i18n/LanguageContext"
import type { ReactNode } from "react"

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>
}
