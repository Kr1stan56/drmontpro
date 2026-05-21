"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            className="text-3xl font-bold text-primary sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kontaktirajte nas
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ste pripravljeni na svoj projekt? Pošljite nam sporočilo in pripravili vam bomo ponudbo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta/10 text-cta">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4
                    className="text-base font-semibold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Naslov
                  </h4>
                  <p className="mt-1 text-slate-600">Rakuševa ulica 8, 1000 Ljubljana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta/10 text-cta">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4
                    className="text-base font-semibold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Telefon
                  </h4>
                  <a href="tel:+38669936133" className="mt-1 block text-slate-600 transition-colors hover:text-cta">
                    Denis Ramšak: 069 936 133
                  </a>
                  <a href="tel:+38631392779" className="block text-slate-600 transition-colors hover:text-cta">
                    Denis Rojc: 031 392 779
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta/10 text-cta">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4
                    className="text-base font-semibold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Email
                  </h4>
                  <a href="mailto:drmontpro@gmail.com" className="mt-1 block text-slate-600 transition-colors hover:text-cta">
                    drmontpro@gmail.com
                  </a>
                  <a href="mailto:info@drmont.si" className="block text-slate-600 transition-colors hover:text-cta">
                    info@drmont.si
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta/10 text-cta">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4
                    className="text-base font-semibold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/dr_montpro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-slate-600 transition-colors hover:text-cta"
                  >
                    @dr_montpro
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Ime in priimek
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Janez Novak"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-cta focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="janez@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-cta focus:bg-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="041 234 567"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-cta focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Sporočilo
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Povejte nam kaj več o vašem projektu..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-cta focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:bg-sky-800 cursor-pointer"
              >
                Pošlji sporočilo
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-2xl shadow-sm"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.495%2C46.038%2C14.515%2C46.050&layer=mapnik&marker=46.044%2C14.505"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DR MontPro lokacija"
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
