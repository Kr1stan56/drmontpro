"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Target, Clock, Award } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Ustanovitelja",
    description: "Denis Ramšak in Denis Rojc – dva izkušena poslovna partnerja z več kot 3 leti podjetniških izkušenj.",
  },
  {
    icon: Target,
    title: "Specializirane ekipe",
    description: "Tri specializirane ekipe za montaže sončnih elektrarn, montažnih hiš ter kovinskih in lesenih konstrukcij.",
  },
  {
    icon: Clock,
    title: "Štiri tržišča",
    description: "Delujemo v Sloveniji, Italiji, Hrvaški in Avstriji – vedno pravočasno in strokovno.",
  },
  {
    icon: Award,
    title: "Kakovost in roki",
    description: "S poudarkom na strokovnosti, kakovosti in spoštovanju rokov zagotavljamo zanesljive rešitve.",
  },
]

export default function About() {
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
              O nas
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              DR MontPro je podjetje d.o.o., ki sta ga ustanovila dva izkušena poslovna partnerja 
              z istim imenom – <strong>Denis Ramšak</strong> in <strong>Denis Rojc</strong>. 
              Združujeva znanje, natančnost in učinkovitost v vseh fazah montaže.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Oba imava več kot tri leta podjetniških izkušenj kot samostojna podjetnika (s.p.). 
              S poudarkom na strokovnosti, kakovosti in spoštovanju rokov zagotavljamo zanesljive 
              rešitve tako za individualne kot poslovne stranke.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-cta">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4
                      className="text-sm font-semibold text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
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
