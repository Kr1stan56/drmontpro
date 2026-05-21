import GalleryPageClient from "@/components/GalleryPageClient"
import { getGalleryImages } from "@/lib/get-gallery-images"

export default function Galerija() {
  const images = getGalleryImages()
  return <GalleryPageClient images={images} />
}
