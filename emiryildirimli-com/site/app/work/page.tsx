import type { Metadata } from "next"
import Link from "next/link"
import { workItems, projects } from "@/lib/site-content"
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
            <h1 className="font-serif-display text-[4em] font-thin leading-none tracking-[-2px] text-white md:text-[90px] md:tracking-[-3px]">
              Work
            </h1>
          </div>

          <p className="text-base font-light leading-[1.6] tracking-[-0.01em] text-white/80">
            Everything I&apos;ve put real time into —{" "}
            <span className="text-white">including the ones that didn&apos;t work.</span>
          </p>

          <div className="flex w-full flex-col border-t border-[#666]">
            {workItems.map((item) => (
              <div key={item.name} className="border-b border-[#666] py-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-light text-white hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-base font-light text-white">
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
                    {item.period} · {item.role}
                  </span>
                </div>
                <p className="mt-2 max-w-[32em] text-[15px] font-light leading-[1.45] tracking-[-0.01em] text-white/70">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full pt-2">
            <p className="text-[13px] font-light uppercase tracking-[1px] text-white/40">
              Projects
            </p>
            <p className="mt-2 max-w-[32em] text-[15px] font-light leading-[1.45] tracking-[-0.01em] text-white/70">
              Token launches I've run the Turkish market for — across Golwens, on my
              own, and now through Voyra:
            </p>
            <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
              {projects.map((name) => (
                <span
                  key={name}
                  className="text-base font-light text-white"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-[32em] text-[15px] font-light leading-[1.45] tracking-[-0.01em] text-white/70">
              Subsquid&apos;s SQD sale was the fastest in CoinList history — $6M in 19
              minutes — and I stayed with the project through everything that came
              after.
            </p>
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
