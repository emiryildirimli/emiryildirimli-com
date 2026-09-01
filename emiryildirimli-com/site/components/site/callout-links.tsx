import { calloutGroups } from "@/lib/site-content"

/**
 * .callout-link {
 *   display:block; padding: 2px 0 0 2px;
 *   border-bottom: 1px solid #666;   (._1 ayrıca border-top)
 *   font-size:16px; font-weight:300; color:#fff;
 * }
 * Gruplar arasındaki boşluk orijinalde ‎ (görünmez karakter) içeren boş bir satır.
 */
export function CalloutLinks() {
  const rows = calloutGroups.flatMap((group, gi) =>
    gi === 0 ? group : [null, ...group]
  )

  return (
    <div className="flex w-full flex-col border-t border-[#666]">
      {rows.map((row, i) =>
        row === null ? (
          <div key={`gap-${i}`} className="h-[27px] border-b border-[#666]" aria-hidden />
        ) : (
          <a
            key={row.label}
            href={row.href}
            className="block border-b border-[#666] pl-[2px] pt-[2px] text-base font-light leading-[23px] text-white no-underline transition-colors duration-200 hover:bg-white/[0.04]"
          >
            {row.label}
          </a>
        )
      )}
    </div>
  )
}
