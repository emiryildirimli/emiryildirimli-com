/**
 * Sayfa içeriği. Bileşenler tamamen data-driven — metni buradan değiştir,
 * layout/tipografi hiç bozulmaz.
 *
 * TASLAK: metinler Emir için yeniden yazıldı. Beğenmediğin cümleyi
 * doğrudan burada değiştir; başka hiçbir dosyaya dokunman gerekmez.
 */

export type Token =
  | string                                        // düz metin
  | { text: string; href?: string; img?: string } // vurgulu (beyaz) kelime + hover görseli

export type Row = Token[]
export type Block = Row | "divider"

export const heroLines = ["Emir", "Yıldırımlı"] as const

/** Her dizi bir "paragraph-container" satırı = flex-wrap, gap 4px */
export const rows: Block[] = [
  [
    "Hey, I'm",
    { text: "Emir.", img: "/hover/emir.svg" },
  ],
  [
    "I started",
    { text: "trading", img: "/hover/trading.svg" },
    "and",
    { text: "building", img: "/hover/building.svg" },
    "when",
    { text: "I was 16." },
  ],
  [
    "Since then, I've worked on",
    { text: "growth" },
    "and",
    { text: "marketing" },
    "for",
    { text: "trading apps," },
    { text: "token launches," },
    "and",
    { text: "consumer products" },
    "— mostly for the",
    { text: "Turkish market." },
  ],
  [
    "These days I split my time between",
    { text: "crypto," },
    { text: "finance," },
    "and",
    { text: "AI." },
  ],
  "divider",
  [
    "I'm based in",
    { text: "Istanbul," },
    "and I've been in the",
    { text: "markets" },
    "for about",
    { text: "six years." },
  ],
  [
    "When people ask me",
    { text: "what I do" },
    "for fun I say",
    { text: '"the gym,"' },
    { text: '"hanging out' },
    { text: 'with friends,"' },
    "and any other",
    { text: "typical" },
    "response.",
  ],
  [
    "The truth is, I",
    { text: "*actually*" },
    "enjoy building (cringe).",
    { text: "My brain" },
    "is",
    { text: "trained on" },
    { text: "the numbers game." },
    "I spent years watching",
    { text: "charts," },
    { text: "launches," },
    "and",
    { text: "communities" },
    "move. I now find the same",
    { text: "dopamine in" },
    { text: "shipping products," },
    { text: "people using things" },
    { text: "I made," },
    "and,",
    { text: "building something" },
    { text: "I'm proud of." },
  ],
]

/** Alt kısımdaki çizgili link listesi. Gruplar arasında boş satır bırakılır. */
export const calloutGroups: { label: string; href: string }[][] = [
  [
    { label: "Work", href: "/work" },
    { label: "Vlogs", href: "https://youtube.com/@emiryildirimli" },
  ],
  [
    { label: "Email", href: "mailto:emir@emiryildirimli.com" },
    { label: "X (Twitter)", href: "https://x.com/emiryildirimli" },
    { label: "Instagram", href: "https://instagram.com/emiryildirimli" },
    { label: "LinkedIn", href: "https://linkedin.com/in/emiryildirimli" },
  ],
]

export const dockItems = [
  { label: "ABOUT", href: "/", icon: "/icons/about.svg", indicator: "#1e9bef" },
  { label: "WORK", href: "/work", icon: "/icons/design.svg", indicator: "#42b27e" },
  { label: "CONTACT", href: "mailto:emir@emiryildirimli.com", icon: "/icons/mail.svg", indicator: "#7df124" },
]
