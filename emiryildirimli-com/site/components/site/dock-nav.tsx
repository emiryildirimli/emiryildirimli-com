import { dockItems } from "@/lib/site-content"

/**
 * .div-block-19  { z-index:50; position:absolute; inset:auto 0 0 }
 * .nav-2         { border-radius:40px; display:flex; overflow:hidden }
 * .nav__item-bg  { width:96px; height:100%; padding:12px 0 8px;
 *                  background:#ffffff1a; backdrop-filter: blur(8px) }
 * .nav__icon     { width:2em; height:2em; opacity:.75 }
 * .nav__label    { font-size:8px; letter-spacing:1px; text-transform:uppercase;
 *                  margin-top:4px; font-weight:300; opacity:.75 }
 * .nav__indicator{ width:36px; height:8px; border-radius:4px;
 *                  position:absolute; top:100%; translate(0,-100%) }
 */
export function DockNav() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-50">
      <div className="flex flex-col items-center justify-center pb-6">
        <nav className="flex overflow-hidden rounded-[40px]">
          {dockItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex flex-col items-center text-white"
            >
              <div className="relative z-[1] flex h-full w-24 flex-col items-center justify-center bg-white/10 pb-2 pt-3 backdrop-blur-[8px] transition-colors duration-200 group-hover:bg-white/[0.16]">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden
                  className="h-8 w-8 opacity-75 transition-opacity duration-200 group-hover:opacity-100"
                />
                <div className="mt-1 text-[8px] font-light uppercase tracking-[1px] opacity-75 transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </div>
              </div>
              <span
                aria-hidden
                className="absolute top-full h-2 w-9 -translate-y-full rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ backgroundColor: item.indicator }}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
