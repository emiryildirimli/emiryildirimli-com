import { heroLines } from "@/lib/site-content"

/**
 * .hero-text-container { margin-bottom: 50px }
 * .hero-text {
 *   font-family: "Tobias Upright", "Times New Roman", serif;
 *   font-size: 90px; font-weight: 100; line-height: 1; letter-spacing: -4px;
 *   color: #fff;
 * }
 * <=767px: font-size 4em; letter-spacing -3px
 */
export function HeroName() {
  return (
    <div className="mb-[50px]">
      {heroLines.map((line) => (
        <h1
          key={line}
          className="font-serif-display text-[4em] font-thin leading-none tracking-[-3px] text-white md:text-[90px] md:tracking-[-4px]"
        >
          {line}
        </h1>
      ))}
    </div>
  )
}
