import type { Row, Token } from "@/lib/site-content"
import { HoverWord } from "./hover-word"

/**
 * .paragraph-container — display:flex; flex-wrap:wrap; gap:4px
 * .text-block         — 16px / line-height:1 / weight 300 / letter-spacing:-.01em
 *                       color: rgba(255,255,255,.8)
 */
export function ProseRow({ row }: { row: Row }) {
  return (
    <div className="flex flex-wrap items-start gap-1 text-left text-base font-light leading-none tracking-[-0.01em] text-white/80">
      {row.map((token: Token, i) =>
        typeof token === "string" ? (
          <span key={i} className="leading-none">
            {token}
          </span>
        ) : (
          <HoverWord key={i} href={token.href} img={token.img}>
            {token.text}
          </HoverWord>
        )
      )}
    </div>
  )
}

/** .divider — 1px, konteyner genişliği */
export function Divider() {
  return <div className="h-px w-full border-t border-[#666]" />
}
