"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Languages } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLang } from "@/i18n/LanguageContext"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, t, toggleLang } = useLang()

  const navLinks = [
    { href: "#hero", label: t.nav.domov },
    { href: "#services", label: t.nav.storitve },
    { href: "#about", label: t.nav.oNas },
    { href: "#why-us", label: t.nav.zakajMi },
    { href: "/galerija", label: t.nav.galerija, isRoute: true },
    { href: "#contact", label: t.nav.kontakt, isContact: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/drmontpro_svetla_transparent.png"
            alt="DR MontPro"
            width={180}
            height={50}
            className="h-12 w-auto object-contain"
          />
          <span className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
            DR Mont
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-cta ${
                  link.isContact ? "font-semibold text-cta" : "font-medium text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-cta ${
                  link.isContact ? "font-semibold text-cta" : "font-medium text-slate-600"
                }`}
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={toggleLang}
            className="ml-2 flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition-all hover:border-cta hover:text-cta cursor-pointer"
          >
            <Languages className="h-4 w-4" />
            {lang === "sl" ? "EN" : "SL"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-600 transition-all hover:border-cta hover:text-cta cursor-pointer"
          >
            <Languages className="h-4 w-4" />
            {lang === "sl" ? "EN" : "SL"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200/80 bg-white/95 px-6 py-6 shadow-lg backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm transition-colors hover:text-cta ${
                      link.isContact ? "font-semibold text-cta" : "font-medium text-slate-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm transition-colors hover:text-cta ${
                      link.isContact ? "font-semibold text-cta" : "font-medium text-slate-600"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
