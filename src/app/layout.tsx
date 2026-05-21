import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "DR MontPro | Montaža sončnih elektrarn in gradbene storitve",
  description:
    "DR MontPro - specializirani za montažo samooskrbnih sončnih elektrarn in gradbene storitve. Zanesljivost, kakovost in strokovnost.",
  icons: {
    icon: [
      { url: "/favicon_svetla.ico", sizes: "32x32" },
      { url: "/favicon_svetla_32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_svetla_64.png", sizes: "64x64", type: "image/png" },
    ],
  },
  keywords: [
    "sončne elektrarne",
    "montaža sončnih elektrarn",
    "gradbeništvo",
    "samooskrbne elektrarne",
    "Ljubljana",
    "gradbena dela",
    "DR MontPro",
  ],
  openGraph: {
    title: "DR MontPro | Montaža sončnih elektrarn in gradbene storitve",
    description:
      "Specializirani za montažo samooskrbnih sončnih elektrarn in gradbene storitve po vsej Sloveniji.",
    url: "https://drmontpro.si",
    siteName: "DR MontPro",
    locale: "sl_SI",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sl" className={`${poppins.variable} ${openSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
