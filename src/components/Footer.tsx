"use client"

import { Sun, Mail, MapPin, ArrowUp } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const footerLinks = [
  { href: "#hero", label: "Domov" },
  { href: "#services", label: "Storitve" },
  { href: "#about", label: "O nas" },
  { href: "#why-us", label: "Zakaj mi" },
  { href: "#contact", label: "Kontakt" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Sun className="h-5 w-5 text-yellow-300" />
              </div>
              <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                DR MontPro
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Specializirani za montažo sončnih elektrarn in gradbene storitve. 
              Zanesljiv partner za vaše projekte po vsej Sloveniji.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Povezave
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:drmontpro@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  drmontpro@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drmont.si"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  info@drmont.si
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dr_montpro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @dr_montpro
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Rakuševa ulica 8, 1000 Ljubljana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} DR MontPro, montaže in storitve, d.o.o. Vse pravice pridržane.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-slate-400 transition-all hover:bg-white/20 hover:text-white cursor-pointer"
          >
            Na vrh
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
