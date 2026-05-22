"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Sun, Home, Building2, Trees, Globe } from "lucide-react"
import Link from "next/link"
import { useLang } from "@/i18n/LanguageContext"

const icons = [Sun, Home, Building2, Trees]

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="text-3xl font-bold text-primary sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.services.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.services.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {t.services.regions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-cta"
              >
                <Globe className="h-3.5 w-3.5" />
                {region}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100"
              >
                <div className="relative min-h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/40" />
                  <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-cta">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="mb-2 text-xl font-semibold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-white/80">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/galerija"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 cursor-pointer"
          >
            {t.services.galleryCta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
