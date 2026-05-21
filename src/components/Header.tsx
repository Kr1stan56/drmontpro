"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#hero", label: "Domov" },
  { href: "#services", label: "Storitve" },
  { href: "#about", label: "O nas" },
  { href: "#why-us", label: "Zakaj mi" },
  { href: "/galerija", label: "Galerija", isRoute: true },
  { href: "#contact", label: "Kontakt" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/drmontpro.jpg"
            alt="DR MontPro"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="text-lg font-semibold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
            DR MontPro
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-cta"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-cta"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-800 cursor-pointer"
          >
            Povpraševanje
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden cursor-pointer"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-cta"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-cta"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-cta px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-sky-800 cursor-pointer"
              >
                Povpraševanje
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
