"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const galleryItems = [
  {
    src: "/prvaslika.jpg",
    title: "Montaža na terenu",
    category: "Montaže",
    span: true,
    local: true,
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    title: "Montaža sončnih panelov",
    category: "Sončne elektrarne",
  },
  {
    src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=400&fit=crop",
    title: "Strešna namestitev",
    category: "Sončne elektrarne",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    title: "Samoskrbna elektrarna",
    category: "Sončne elektrarne",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    title: "Gradbena dela",
    category: "Gradbeništvo",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    title: "Strokovna montaža",
    category: "Montaže",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    title: "Inženiring projekt",
    category: "Projekti",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop",
    title: "Montaža konstrukcij",
    category: "Montaže",
  },
  {
    src: "https://images.unsplash.com/photo-1574482620811-8b3095b1f83b?w=600&h=400&fit=crop",
    title: "Sončna elektrarna na objektu",
    category: "Sončne elektrarne",
  },
]

export default function Galerija() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cta transition-colors hover:text-sky-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Nazaj na domov
          </Link>

          <h1
            className="text-4xl font-bold text-primary sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Galerija projektov
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Poglejte si nekaj naših projektov. Kmalu bodo tu tudi slike z vaših Instagram objav.
          </p>
        </motion.div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative mb-6 overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  {...(item.local ? { unoptimized: true } : {})}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                <span className="mb-1 inline-block rounded-full bg-cta/90 px-3 py-0.5 text-xs font-medium text-white">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-2xl border border-sky-100 bg-sky-50 p-8 text-center"
        >
          <p className="text-lg text-slate-600">
            Več slik kmalu sledi. Spremljajte nas na Instagramu za sveže objave projektov.
          </p>
          <a
            href="https://www.instagram.com/dr_montpro/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-cta hover:text-sky-800 font-semibold"
          >
            @dr_montpro na Instagramu →
          </a>
        </motion.div>
      </div>
    </div>
  )
}
