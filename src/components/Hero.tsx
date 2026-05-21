"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Zap } from "lucide-react"
import { useLang } from "@/i18n/LanguageContext"

export default function Hero() {
  const { t } = useLang()

  const stats = [
    { label: t.hero.statYears, value: "4+" },
    { label: t.hero.statProjects, value: "200+" },
    { label: t.hero.statSatisfaction, value: "99%" },
  ]

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-100/30 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center px-6 py-20 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-cta"
          >
            <Zap className="h-4 w-4" />
            {t.hero.badge}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-slate-400"
          >
            {t.hero.company}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.hero.titleBefore}{" "}
            <span className="bg-gradient-to-r from-cta to-sky-500 bg-clip-text text-transparent">
              {t.hero.titleGradient}
            </span>{" "}
            {t.hero.titleAfter}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-slate-600 sm:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:bg-sky-800 hover:shadow-xl cursor-pointer"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 cursor-pointer"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          {/* stats – desktop (below text in left column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 hidden w-full max-w-md grid-cols-3 gap-8 lg:grid"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 lg:items-start">
                <span className="text-2xl font-bold text-primary sm:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16 w-full lg:mt-0 lg:flex-1"
        >
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl shadow-sky-200/50">
            <Image
              src="/prvaslika.jpg"
              alt="DR MontPro"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-cta/10 blur-xl" />
          <div className="absolute -top-6 -right-6 h-40 w-40 rounded-2xl bg-sky-200/30 blur-xl" />

          {/* stats – mobile (below image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid w-full grid-cols-3 gap-8 lg:hidden"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-primary sm:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
