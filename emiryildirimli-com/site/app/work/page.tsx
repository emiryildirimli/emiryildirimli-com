import type { Metadata } from "next"
import Link from "next/link"
import { DockNav } from "@/components/site/dock-nav"

export const metadata: Metadata = { title: "Work — Emir Yıldırımlı" }

/**
 * Placeholder "Work" sayfası — ana sayfayla aynı ölçüler.
 * İçeriği hazır olduğunda buraya proje satırlarını ekle.
 */
export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-[#030303]">
      <section className="relative z-[2] flex min-h-[90vh] flex-col items-center justify-center bg-[#020202] px-8 pb-[9em] pt-[35px]">
        <div className="flex w-full flex-col items-start justify-center gap-[1.2em] md:w-[32em]">
          <div className="mb-[50px]">
            <h1 className="font-serif-display text-[4em] font-thin leading-none tracking-[-3px] text-white md:text-[90px] md:tracking-[-4px]">
              Work
            </h1>
          </div>

          <div className="flex flex-wrap items-start gap-1 text-base font-light leading-none tracking-[-0.01em] text-white/80">
            <span>Selected projects are on the way.</span>
          </div>

          <div className="flex w-full flex-col border-t border-[#666]">
            <Link
              href="/"
              className="block border-b border-[#666] pl-[2px] pt-[2px] text-base font-light leading-[23px] text-white transition-colors duration-200 hover:bg-white/[0.04]"
            >
              ← Back
            </Link>
            <a
              href="mailto:emir@emiryildirimli.com"
              className="block border-b border-[#666] pl-[2px] pt-[2px] text-base font-light leading-[23px] text-white transition-colors duration-200 hover:bg-white/[0.04]"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <DockNav />
    </div>
  )
}
