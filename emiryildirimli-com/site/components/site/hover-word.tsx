"use client"

import { useRef, useState } from "react"

type Props = {
  children: React.ReactNode
  href?: string
  /** hover'da beliren görsel (orijinalde .hover_image) */
  img?: string
}

/**
 * .hover-parent > .is-main.border-null > .text_hover  yapısının birebir karşılığı.
 *
 * Orijinal ölçüler:
 *   .is-main        letter-spacing: -.07em
 *   .text_hover     color: #fff  (çevresindeki metin rgba(255,255,255,.8))
 *   .hover_image    height: 15rem; border-radius: 15px; bottom: 4em; z-index: 15
 */
export function HoverWord({ children, href, img }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const inner = (
    <span className="relative z-10 text-white">{children}</span>
  )

  return (
    <span
      ref={ref}
      className="relative flex w-auto items-start justify-center border border-transparent"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="relative z-[3] flex w-auto flex-wrap items-center justify-center tracking-[-0.07em] cursor-pointer">
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="no-underline">
            {inner}
          </a>
        ) : (
          inner
        )}
      </span>

      {img ? (
        <img
          src={img}
          alt=""
          aria-hidden
          className={[
            "pointer-events-none absolute bottom-[4em] left-1/2 z-[15] h-[15rem] max-w-none -translate-x-1/2 rounded-[15px] object-cover",
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
