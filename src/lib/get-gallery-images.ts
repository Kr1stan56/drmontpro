import { readdirSync } from "fs"
import { join } from "path"

export type GalleryImage = {
  src: string
  title: string
  subtitle: string
  category: string
  span?: boolean
}

const extensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"]

type Rule = {
  keywords: string[]
  category: string
  title: string
}

const rules: Rule[] = [
  { keywords: ["elektrarna", "soncna", "solar", "panel", "fotovoltaika"], category: "Sončne elektrarne", title: "Montaža sončne elektrarne" },
  { keywords: ["montaza", "montaža", "konstrukcij", "nosilec", "jeklen"], category: "Montaže", title: "Montaža konstrukcij" },
  { keywords: ["gradnja", "gradben", "gradbena", "objekt", "beton", "zid"], category: "Gradbeništvo", title: "Gradbena dela" },
  { keywords: ["his", "hiš", "lesen", "brunarica"], category: "Montažne hiše", title: "Montaža objekta" },
  { keywords: ["obnova", "adaptacija", "prenova", "renovacija"], category: "Obnove", title: "Obnova in adaptacija" },
]

function classifyFile(name: string): { category: string; title: string } {
  const lower = name.toLowerCase()
  for (const rule of rules) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return { category: rule.category, title: rule.title }
    }
  }
  return { category: "Projekti", title: "Projekt" }
}

function cleanTitle(name: string): string {
  return name
    .replace(/\.(jpg|jpeg|png|webp|gif)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function getGalleryImages(): GalleryImage[] {
  try {
    const dir = join(process.cwd(), "public/images/gallery")
    const files = readdirSync(dir)

    const images = files
      .filter((f) => extensions.some((ext) => f.toLowerCase().endsWith(ext)))
      .map((f) => {
        const { category, title } = classifyFile(f)
        const cleaned = cleanTitle(f)
        return {
          src: `/images/gallery/${f}`,
          title: title,
          subtitle: cleaned,
          category,
          span: false,
        }
      })

    if (images.length > 0) images[0].span = true

    return images
  } catch {
    return []
  }
}
