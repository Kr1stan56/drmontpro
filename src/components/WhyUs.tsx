"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, HeadphonesIcon, Wrench, PiggyBank, Leaf } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Kakovost brez kompromisov",
    description: "Vsak projekt izvedemo v skladu z najvišjimi standardi in s certificiranimi materiali.",
  },
  {
    icon: Clock,
    title: "Hitra in zanesljiva izvedba",
    description: "Držimo se dogovorjenih rokov in zagotavljamo pravočasno dokončanje projektov.",
  },
  {
    icon: HeadphonesIcon,
    title: "Oseben pristop",
    description: "Vsaki stranki prisluhnemo in najdemo rešitev, ki ustreza njenim potrebam in proračunu.",
  },
  {
    icon: Wrench,
    title: "Celovite storitve",
    description: "Od ideje do izvedbe — svetovanje, projektiranje, montaža in vzdrževanje na enem mestu.",
  },
  {
    icon: PiggyBank,
    title: "Ugoden cenovni razred",
    description: "Konkurenčne cene brez skritih stroškov. Pripravimo natančen predračun pred začetkom del.",
  },
  {
    icon: Leaf,
    title: "Zelena prihodnost",
    description: "Z montažo sončnih elektrarn prispevamo k čistejšemu okolju in nižjim stroškom energije.",
  },
]

export default function WhyUs() {
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
            Zakaj izbrati nas?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Izberite partnerja, ki mu lahko zaupate. Tukaj je nekaj razlogov, zakaj so stranke zadovoljne z nami.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-sky-100 hover:bg-sky-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cta/10 text-cta">
                <reason.icon className="h-5 w-5" />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
