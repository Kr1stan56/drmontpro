"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import GalleryClient from "@/components/GalleryClient"
import { useLang } from "@/i18n/LanguageContext"
import type { GalleryImage } from "@/lib/get-gallery-images"

export default function GalleryPageClient({ images }: { images: GalleryImage[] }) {
  const { t } = useLang()

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-colors hover:text-sky-800"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.gallery.back}
          </Link>

          <h1
            className="text-4xl font-bold text-primary sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.gallery.title}
          </h1>
        </div>

        <GalleryClient images={images} />
      </div>
    </div>
  )
}
