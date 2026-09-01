import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="en">
      {/*
        body: background #030303, 16px / 20px, "PP Neue Montreal"
        Ticari fontlar (PP Neue Montreal / Tobias Upright) repoda yoksa
        globals.css içindeki @font-face bloklarını doldur; yoksa fallback devreye girer.
      */}
      <body className="min-h-screen bg-[#030303] font-sans text-base leading-5 text-white/80 antialiased">
        {children}
      </body>
    </html>
  )
}
