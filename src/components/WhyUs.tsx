"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, HeadphonesIcon, Wrench, PiggyBank, Leaf } from "lucide-react"
import { useLang } from "@/i18n/LanguageContext"

const icons = [CheckCircle, Clock, HeadphonesIcon, Wrench, PiggyBank, Leaf]

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section id="why-us" className="bg-white py-24">
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
            {t.whyUs.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t.whyUs.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((reason, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-sky-100 hover:bg-sky-50/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cta/10 text-cta">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
