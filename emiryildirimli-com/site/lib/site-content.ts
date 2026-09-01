/**
 * Sayfa içeriği. Bileşenler tamamen data-driven — metni buradan değiştir,
 * layout/tipografi hiç bozulmaz.
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
    "at",
    { text: "16." },
    "Six years later it's still the",
    { text: "only thing" },
    "I want to",
    { text: "do.", img: "/hover/building.svg" },
  ],
  [
    "I run",
    { text: "growth" },
    "and",
    { text: "marketing" },
    "for",
    { text: "token launches," },
    { text: "trading apps," },
    "and",
    { text: "consumer products" },
    "— mostly in the",
    { text: "Turkish market," },
    "where I've spent those six years building a",
    { text: "network" },
    "that actually",
    { text: "moves numbers." },
  ],
  "divider",
  [
    "Things I've worked on:",
    { text: "Voyra", href: "https://voyra.io" },
    "(engagement rewards),",
    { text: "Finderex" },
    "(trading app),",
    { text: "PowAhoy" },
    "(Web3 IP), and a",
    { text: "launchpad" },
    "I'm building on",
    { text: "Arc." },
  ],
  [
    "Not everything shipped, and I'd rather say so.",
    { text: "PowAhoy" },
    "— a Web3 IP project built on a",
    { text: "rebellion manifesto" },
    "— never launched: the market turned before we did. I still think it's the",
    { text: "biggest idea" },
    "I have, and I'm holding it for the",
    { text: "right cycle." },
  ],
  "divider",
  [
    "I'm based in",
    { text: "Istanbul." },
    "These days it's",
    { text: "crypto," },
    { text: "AI," },
    "and whatever I can",
    { text: "ship next." },
  ],
  [
    "When people ask me",
    { text: "what I do" },
    "for fun, the honest answer is",
    { text: "this." },
    "I like",
    { text: "charts," },
    { text: "launch days," },
    "and watching a",
    { text: "number go up" },
    "because of something",
    { text: "I did." },
    "Everything else is a",
    { text: "break" },
    "between two of those.",
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

/** /work sayfası — şeffaflık: ne oldu, ne olmadı. */
export type WorkItem = {
  name: string
  href?: string
  role: string
  status: "Live" | "Ended" | "Building" | "On hold"
  note: string
}

export const workItems: WorkItem[] = [
  {
    name: "Voyra",
    href: "https://voyra.io",
    role: "Co-founder / growth",
    status: "Live",
    note: "Engagement rewards infrastructure — it scores what a community actually does and pays for it. Serious rewards distributed so far. The longer play is turning it into a crypto marketing agency that serves big teams.",
  },
  {
    name: "Arc launchpad",
    role: "Founder",
    status: "Building",
    note: "My own token launchpad on Arc. I looked at building on top of an existing pad and decided to ship our own instead. Reference point: pons on Robinhood Chain.",
  },
  {
    name: "Finderex",
    role: "Design + product — my first job",
    status: "Ended",
    note: "Trading app. I handled everything from the pitch deck to the in-app buttons. The business never found its market and I left after about two years — but it's where I learned how a product actually gets built.",
  },
  {
    name: "PowAhoy",
    role: "Co-founder",
    status: "On hold",
    note: "A Web3 IP project launched on a rebellion manifesto, built when IP plays and tap-to-earn were peaking. 200–300 people put the skull-and-flag on their profile before we shipped a thing. Then the market turned and we held it back. I still think it's the biggest thing I have — it's waiting for the right cycle.",
  },
]
