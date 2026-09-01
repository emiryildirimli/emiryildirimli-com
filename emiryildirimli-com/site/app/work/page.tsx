import type { Metadata } from "next"
import Link from "next/link"
import { workItems } from "@/lib/site-content"
import { DockNav } from "@/components/site/dock-nav"

export const metadata: Metadata = {
  title: "Work — Emir Yıldırımlı",
  description: "What I've worked on — what shipped, what didn't, and why.",
}

const statusColor: Record<string, string> = {
  Live: "#42b27e",
  Building: "#1e9bef",
  Ended: "#8a8a8a",
  "On hold": "#c08a3e",
}

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
            <span className="leading-none">Everything I've put real time into —</span>
            <span className="leading-none tracking-[-0.07em] text-white">
              including the ones that didn't work.
            </span>
          </div>

          <div className="flex w-full flex-col border-t border-[#666]">
            {workItems.map((item) => (
              <div key={item.name} className="border-b border-[#666] py-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-light tracking-[-0.07em] text-white hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-base font-light tracking-[-0.07em] text-white">
                      {item.name}
                    </span>
                  )}
                  <span
                    className="text-[10px] uppercase tracking-[1px]"
                    style={{ color: statusColor[item.status] ?? "#8a8a8a" }}
                  >
                    {item.status}
                  </span>
                  <span className="text-[11px] font-light tracking-[-0.01em] text-white/40">
                    {item.role}
                  </span>
                </div>
                <p className="mt-2 max-w-[32em] text-[15px] font-light leading-[1.45] tracking-[-0.01em] text-white/70">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col">
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
