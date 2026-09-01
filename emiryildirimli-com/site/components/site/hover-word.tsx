"use client"

import { useState } from "react"

type Props = {
  children: React.ReactNode
  href?: string
  /** hover'da beliren görsel */
  img?: string
}

/**
 * Vurgulu (beyaz) kelime. Satır akışını bozmaması için inline;
 * hover görseli mutlak konumlu.
 */
export function HoverWord({ children, href, img }: Props) {
  const [open, setOpen] = useState(false)

  const inner = <span className="relative z-10 font-medium text-white">{children}</span>

  return (
    <span
      className="relative inline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="no-underline">
          {inner}
        </a>
      ) : (
        inner
      )}

      {img ? (
        <img
          src={img}
          alt=""
          aria-hidden
          className={[
            "pointer-events-none absolute bottom-[2em] left-1/2 z-[15] h-[15rem] max-w-none -translate-x-1/2 rounded-[15px] object-cover",
            "transition-[opacity,transform] duration-300 ease-out",
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95",
          ].join(" ")}
        />
      ) : null}
    </span>
  )
}
