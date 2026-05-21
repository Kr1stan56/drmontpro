"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { GalleryImage } from "@/lib/get-gallery-images"

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) {
    return null
  }

  return (
    <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
      {images.map((item, index) => (
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
  )
}
