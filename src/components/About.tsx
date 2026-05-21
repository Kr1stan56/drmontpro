"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Target, Clock, Award } from "lucide-react"
import { useLang } from "@/i18n/LanguageContext"

const icons = [Users, Target, Clock, Award]

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-bold text-primary sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.about.heading}
            </h2>
            <p
              className="mt-6 text-lg leading-relaxed text-slate-600"
              dangerouslySetInnerHTML={{ __html: t.about.p1 }}
            />
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{t.about.p2}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {t.about.highlights.map((item, i) => {
                const Icon = icons[i]
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-cta">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4
                        className="text-sm font-semibold text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-sky-100/50">
              <Image
                src="/o-nas.jpg"
                alt="DR MontPro ekipa"
                width={600}
                height={500}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-cta/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
