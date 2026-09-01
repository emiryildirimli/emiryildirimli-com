import type { Metadata } from "next"
import { Inter, Tinos } from "next/font/google"
import "./globals.css"

/**
 * Fontlar build sırasında indirilip kendi sunucumuzdan servis ediliyor.
 * Böylece her cihazda birebir aynı görünür — fallback'e düşüp kaymaz.
 */
const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
})

const serifDisplay = Tinos({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
  variable: "--font-serif-display",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://emiryildirimli.com"),
  title: "Emir Yıldırımlı",
  description:
    "Emir Yıldırımlı — growth & marketing across crypto, finance and AI. Based in Istanbul.",
  openGraph: {
    title: "Emir Yıldırımlı",
    description:
      "Growth & marketing across crypto, finance and AI. Based in Istanbul.",
    url: "https://emiryildirimli.com",
    siteName: "Emir Yıldırımlı",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emir Yıldırımlı",
    description:
      "Growth & marketing across crypto, finance and AI. Based in Istanbul.",
  },
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serifDisplay.variable}`}>
      <body className="min-h-screen bg-[#030303] font-sans text-base leading-5 text-white/80 antialiased">
        {children}
      </body>
    </html>
  )
}
