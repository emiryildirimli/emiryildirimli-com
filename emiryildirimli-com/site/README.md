# emiryildirimli.com

Next.js 14 (App Router) + Tailwind. Tek sayfalık kişisel site.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
```

## İçeriği değiştirmek

Tüm metin, linkler ve alt navigasyon tek dosyada: **`lib/site-content.ts`**
Layout veya tipografiye dokunmadan cümleleri değiştirebilirsin.

- `heroLines` — büyük başlıktaki isim
- `rows` — paragraf satırları. Düz string = gri metin, `{ text }` = beyaz vurgu,
  `{ text, href }` = link, `{ text, img }` = hover'da görsel açılır
- `calloutGroups` — alttaki çizgili link listesi
- `dockItems` — alttaki pill navigasyon

## Yapı

```
app/
  layout.tsx      metadata / SEO
  page.tsx        ana sayfa
  work/page.tsx   "Work" placeholder
  globals.css     @font-face + reset
  icon.svg        favicon
components/site/  hero, paragraf satırı, hover kelime, link listesi, dock
lib/site-content.ts
tailwind.config.ts
```

## Fontlar

Orijinal tasarım iki ticari font kullanıyor:

- Gövde: **PP Neue Montreal** (Pangram Pangram)
- Başlık: **Tobias Upright** (Displaay)

Lisanslı `.woff2` dosyaları `public/fonts/` içine koyup `app/globals.css`
içindeki `@font-face` bloklarını yorumdan çıkar. Yoksa fallback devreye girer.

## Deploy

Vercel. `main` branch'e push → otomatik production deploy.
