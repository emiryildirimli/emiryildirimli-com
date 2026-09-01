import type { Row, Token } from "@/lib/site-content"
import { HoverWord } from "./hover-word"

/**
 * Metin satırı — normal akan paragraf.
 * (Önceki flex-wrap yapısı uzun cümlelerde satır aralığını bozuyordu.)
 */
export function ProseRow({ row }: { row: Row }) {
  return (
    <p className="text-left text-base font-light leading-[1.25] tracking-[-0.01em] text-white/60">
      {row.map((token: Token, i) => (
        <span key={i}>
          {typeof token === "string" ? (
            token
          ) : (
            <HoverWord href={token.href} img={token.img}>
              {token.text}
            </HoverWord>
          )}
          {i < row.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  )
}

/** .divider — 1px, konteyner genişliği */
export function Divider() {
  return <div className="h-px w-full border-t border-[#666]" />
}
