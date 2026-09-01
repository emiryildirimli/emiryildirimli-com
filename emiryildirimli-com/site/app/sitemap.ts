import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://emiryildirimli.com", priority: 1 },
    { url: "https://emiryildirimli.com/work", priority: 0.5 },
  ]
}
