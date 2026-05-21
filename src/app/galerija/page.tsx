import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import GalleryClient from "@/components/GalleryClient"
import { getGalleryImages } from "@/lib/get-gallery-images"

export default function Galerija() {
  const images = getGalleryImages()

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div>
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
        </div>

        <GalleryClient images={images} />

        <div className="mt-16 rounded-2xl border border-sky-100 bg-sky-50 p-8 text-center">
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
        </div>
      </div>
    </div>
  )
}
