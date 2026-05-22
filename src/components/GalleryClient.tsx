"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { GalleryImage } from "@/lib/get-gallery-images"

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const close = useCallback(() => setSelectedIndex(null), [])

  const prev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
  }, [images.length])

  const next = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))
  }, [images.length])

  useEffect(() => {
    if (selectedIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [selectedIndex, close, prev, next])

  if (images.length === 0) return null

  return (
    <>
      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative mb-6 cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
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

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-6 w-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-auto rounded-2xl object-contain"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
                <span className="inline-block rounded-full bg-cta px-3 py-0.5 text-xs font-medium text-white">
                  {images[selectedIndex].category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {images[selectedIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
