import { rows } from "@/lib/site-content"
import { HeroName } from "./hero-name"
import { ProseRow, Divider } from "./prose-row"
import { CalloutLinks } from "./callout-links"
import { DockNav } from "./dock-nav"

/**
 * Sayfa iskeleti — zuhair.io ölçüleriyle:
 *
 * .hero-sect            display:flex; flex-direction:column;
 *                       justify-content:center; align-items:center;
 *                       min-height:90vh; padding:35px 2em; background:#020202
 * .text-block-container width:32em; gap:1.2em; flex-direction:column
 *                       (<=767px: width:100%)
 * body                  background:#030303; font: 16px/20px "PP Neue Montreal"
 */
export function SitePage() {
  return (
    <div className="relative min-h-screen bg-[#030303]">
      <section className="relative z-[2] flex min-h-[90vh] flex-col items-center justify-center bg-[#020202] px-8 pb-[9em] pt-[35px]">
        {/* .text-block-container */}
        <div className="flex w-full flex-col items-start justify-center gap-[1.2em] md:w-[32em]">
          <HeroName />

          {rows.map((row, i) =>
            row === "divider" ? (
              <Divider key={`d-${i}`} />
            ) : (
              <ProseRow key={i} row={row} />
            )
          )}

          <CalloutLinks />
        </div>
      </section>

      <DockNav />
    </div>
  )
}
