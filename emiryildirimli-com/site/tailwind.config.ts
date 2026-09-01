import type { Config } from "tailwindcss"

/**
 * zuhair.io'dan çıkarılan tasarım tokenları.
 *
 * Tipografi ölçeği (desktop, computed):
 *   hero    90px / 1     / 100 / -4px
 *   gövde   16px / 1     / 300 / -0.01em
 *   vurgu   16px / 1     / 400 / -0.07em   (beyaz)
 *   link    16px / 23px  / 300
 *   dock    8px  / 1     / 300 / +1px, uppercase
 *
 * Spacing:
 *   section padding   35px 2em
 *   container width   32em (512px)
 *   container gap     1.2em (19.2px)
 *   hero alt boşluk   50px
 *   satır içi gap     4px
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          page: "#030303",   // body / .section
          hero: "#020202",   // .hero-sect
          rule: "#666666",   // .callout-link border
          muted: "#bdbdbd",  // .is-main
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        "serif-display": ["var(--font-serif-display)", '"Times New Roman"', "Times", "serif"],
      },
      fontSize: {
        dock: ["8px", { lineHeight: "1", letterSpacing: "1px" }],
        hero: ["90px", { lineHeight: "1", letterSpacing: "-4px" }],
      },
      spacing: {
        container: "32em",   // .text-block-container
        "hero-gap": "50px",  // .hero-text-container margin-bottom
      },
      backdropBlur: {
        dock: "8px",
      },
      borderRadius: {
        dock: "40px",
        hover: "15px",
      },
    },
  },
  plugins: [],
}

export default config
