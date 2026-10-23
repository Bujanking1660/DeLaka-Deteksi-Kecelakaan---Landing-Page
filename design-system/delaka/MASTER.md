# Design System Master — DeLaka

> When building a page, check `design-system/delaka/pages/[page].md` first.
> If it exists, its rules override this Master file. Otherwise follow the rules below.

---

**Project:** DeLaka — landing page
**Category:** Product landing (safety / emergency tech)
**Reference:** https://lydera.codelabspace.or.id/

---

## Prinsip Utama

1. **Jujur, bukan menjual berlebihan.** Tidak ada metrik karangan, angka akurasi fiktif, atau status sistem palsu.
2. **Konten dulu, dekorasi belakangan.** Tidak ada blob gradient, badge "engineered", terminal monospace, atau animasi yang tidak menjelaskan apa pun.
3. **Tunjukkan produk sebenarnya.** Mockup aplikasi asli dipakai sebagai bukti utama, bukan ilustrasi abstrak.
4. **Tenang dan lapang.** Banyak whitespace, tipografi tenang, satu aksen warna kuat.

---

## Color

| Role | Hex | Usage |
|------|-----|-------|
| Primary / CTA | `#0B2559` | Tombol utama, kartu CTA, aksen teks penting |
| Primary hover | `#07193D` | Hover tombol utama |
| Text | `#0F172A` (slate-950) | Judul dan teks utama |
| Text secondary | `#475569` (slate-600) | Paragraf, deskripsi |
| Muted | `#94A3B8` (slate-400) | Label kecil, nomor urut |
| Border | `#E2E8F0` (slate-200) | Garis pemisah, border kartu |
| Surface | `#F8FAFC` (slate-50) | Panel gambar, section alternatif |
| Background | `#FFFFFF` | Latar utama |
| Success | `#059669` (emerald-600) | Ikon centang / status aman |

Tidak memakai gradient warna-warni. Tidak memakai glassmorphism pada kartu konten.

## Typography

- **Font:** Plus Jakarta Sans (400, 500, 600, 700, 800)
- **Heading:** `font-bold`, `tracking-tight`, line-height ~1.1–1.15
- **Body:** `text-base` / `text-lg`, `leading-relaxed`, warna slate-600
- **Eyebrow:** `text-sm font-medium text-slate-600` dengan dot kecil
- Tanpa font monospace dekoratif di UI marketing.

## Spacing & Layout

- Container: `max-w-7xl px-6 lg:px-8`
- Section padding: `py-20 sm:py-28`
- Gap grid: 12–20 unit; jarak antar blok fitur 80–128px
- Navbar height: `h-20`, fixed, transparan lalu putih + border saat scroll
- `scroll-margin-top: 5.5rem` untuk anchor

## Komponen

### Tombol
- Primary: pill (`rounded-full`), bg `#0B2559`, teks putih, px-6 py-3, hover lebih gelap.
- Secondary: pill, border slate-200, teks slate-900, hover bg slate-100.
- Text link: `text-sm font-semibold` + panah, hover warna lebih lembut.

### Kartu
- `rounded-2xl border border-slate-200 p-8 sm:p-10`
- Hover hanya mengubah border (`hover:border-slate-300`). Tanpa scale, tanpa shadow melayang.

### Mockup ponsel
- Frame: `rounded-[2rem] border-[5px] border-slate-900 bg-slate-900 overflow-hidden`
- Shadow lembut `0 24px 30px rgba(15,23,42,0.28)`
- Dua ponsel berdampingan dengan rotasi kecil (-5°, +3°) di atas panel `bg-slate-50 rounded-3xl`.

### FAQ
- Accordion berbasis `divide-y` + `border-y`, tombol plus berputar 45° saat terbuka.
- Transisi `grid-rows-[0fr] → [1fr]`.

### Navbar
- Tanpa logo gambar. Wordmark teks `DeLaka` (font-bold, tracking-tighter).
- Link desktop dengan underline tipis saat hover, CTA pill kanan.
- Mobile: drawer putih, link fade/slide, tutup otomatis saat diklik.

## Anti-patterns (DILARANG)

- ❌ Angka/metrik palsu (mis. "99.2% akurasi", "< 3 detik", "50Hz")
- ❌ Tombol unduh APK / tautan yang tidak ada produknya
- ❌ Simulator atau demo palsu yang mengklaim fungsi nyata
- ❌ Logo/badge/emblem buatan yang tidak disediakan
- ❌ Terminal monospace, "SYSTEM: ACTIVE", status bar telemetri palsu
- ❌ Gradient blob, glow orb, glass card transparan di atas konten
- ❌ Emoji sebagai ikon (gunakan Lucide)
- ❌ Terjemahan buzzword: "solusi terdepan", "revolusioner", "AI-powered" tanpa bukti
- ❌ Hover `scale` yang menggeser layout
- ❌ Section berulang yang menyampaikan hal sama (stats + pipeline + steps + showcase)

## Accessibility

- Kontras teks minimal 4.5:1
- `cursor-pointer` pada semua elemen interaktif
- `aria-expanded` pada accordion, `aria-label` pada tombol ikon
- Fokus terlihat (`outline` navy)
- `prefers-reduced-motion` dimatikan animasinya
- Alt text deskriptif pada setiap screenshot

## Checklist sebelum rilis

- [ ] Semua klaim bisa dibuktikan dari aplikasi/mockup
- [ ] Tidak ada fitur fiktif (unduh, simulator, akun)
- [ ] Semua 10 aset dipakai secara relevan
- [ ] Responsif 320 / 375 / 768 / 1024 / 1440 tanpa scroll horizontal
- [ ] Build produksi bersih tanpa import tak terpakai
