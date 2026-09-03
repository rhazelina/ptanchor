# Design System — PT Anchor Pakan Jaya

Versi 1.0 · Untuk implementasi di React + Vite

## Konsep

**"Steel and Grain"** — memadukan kekokohan industri (biru navy, garis tegas, tipografi slab-serif) dengan kehangatan pertanian (emas gandum, hijau padang). Nama perusahaan — *Anchor* — dipakai secara literal sebagai motif garis jangkar minimalis yang berulang di seluruh produk digital, bukan sekadar logo, tapi elemen identitas.

Layout mengambil inspirasi dari **manifest/packing list gudang**, bukan grid kartu SaaS: daftar produk ditampilkan sebagai baris data (rule tipis, rata kiri), bukan kartu membulat dengan shadow lembut. Ini konsisten dengan sifat produk (mineral & bahan baku, dijual berdasarkan spesifikasi/grade/kemasan, bukan produk gaya hidup).

---

## 1. Palet Warna

| Nama | Hex | Peran |
|---|---|---|
| **Anchor Navy** | `#1C3A4B` | Warna brand utama — header, tombol primer, wordmark |
| **Grain Gold** | `#C89A3E` | Aksen — CTA sekunder, highlight, hover state |
| **Pasture Green** | `#4B6B4E` | Kategori/tag produk, status sukses |
| **Limestone** | `#E7E7DF` | Latar netral terang (bukan krem hangat — nuansa mineral/abu batu kapur) |
| **Slate Grey** | `#83807A` | Teks sekunder, border, placeholder |
| **Ink** | `#1F2421` | Warna teks utama (bukan hitam pekat generik) |

Turunan (tint/shade) tersedia di `tokens.css` — misalnya `--color-anchor-navy-dark`, `--color-grain-gold-light`, dst — untuk hover/active state.

**Aturan pemakaian:**
- Grain Gold di atas Anchor Navy hanya untuk teks besar/ikon/aksen — kontrasnya tidak cukup untuk body text kecil.
- Pasture Green dipakai konsisten untuk tag kategori produk (mis. "Unggas", "Ruminansia", "Aquaculture") agar user cepat mengenali pola.
- Jangan tambah warna baru di luar 6 warna ini + turunannya tanpa alasan kuat — disiplin warna adalah bagian dari identitas brand ini.
- Pengecualian yang disengaja: tombol WhatsApp mengambang tetap memakai hijau WhatsApp resmi (`#25D366`), bukan Pasture Green — demi pengenalan instan oleh user, bukan demi konsistensi brand semata.

### Kontras & Aksesibilitas
- Ink di atas Paper/Limestone: kontras tinggi, aman untuk body text.
- Putih di atas Anchor Navy: aman untuk semua ukuran teks.
- Selalu cek kontras saat menambah kombinasi baru (target minimum WCAG AA — 4.5:1 untuk teks normal, 3:1 untuk teks besar/UI).

---

## 2. Tipografi

| Peran | Font | Sumber |
|---|---|---|
| Display / Heading | **Zilla Slab** (500/600/700) | Google Fonts |
| Body / UI | **Public Sans** (400/500/600/700) | Google Fonts |

Kenapa kombinasi ini: Zilla Slab punya karakter "dicap/stempel" yang pas untuk industri bahan baku (mengingatkan pada label karung/kemasan), sementara Public Sans dirancang untuk keterbacaan tinggi di UI padat data (cocok untuk tabel spesifikasi produk). Dua keluarga font ini jelas berbeda karakternya sehingga tidak butuh font ketiga.

### Skala Tipe

| Token | Ukuran | Font | Pemakaian |
|---|---|---|---|
| `--fs-display-xl` | 56px / lh 1.1 | Zilla Slab SemiBold | Hero headline |
| `--fs-h1` | 40px / lh 1.2 | Zilla Slab SemiBold | Judul halaman |
| `--fs-h2` | 32px / lh 1.2 | Zilla Slab Medium | Judul section |
| `--fs-h3` | 24px / lh 1.3 | Zilla Slab Medium | Sub-section, nama produk |
| `--fs-h4` | 20px / lh 1.3 | Public Sans SemiBold | Label kelompok, card title kecil |
| `--fs-body-lg` | 18px / lh 1.6 | Public Sans Regular | Lead paragraph |
| `--fs-body` | 16px / lh 1.6 | Public Sans Regular | Body text umum |
| `--fs-small` | 14px / lh 1.5 | Public Sans Regular | Caption, metadata |
| `--fs-micro` | 13px / lh 1.4 | Public Sans Medium | Label form, tag |

**Aturan:**
- Lebar baris teks body maksimal **±68 karakter** (`--measure: 68ch`) agar tetap nyaman dibaca.
- Judul ditulis sentence case, bukan Title Case atau ALL CAPS.
- Jangan pakai monospace untuk label kecil/spesifikasi — cukup Public Sans Medium, tetap konsisten dengan sistem.
- Jangan menonjolkan satu kata dalam headline dengan warna/italic berbeda — biarkan hierarki dibentuk oleh ukuran & spacing.

### Instalasi Font di Vite

**Opsi A — self-hosted (disarankan, performa lebih baik):**
```bash
npm install @fontsource/zilla-slab @fontsource/public-sans
```
```js
// src/main.jsx
import '@fontsource/zilla-slab/500.css'
import '@fontsource/zilla-slab/600.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import './styles/tokens.css'
```

**Opsi B — via Google Fonts CDN** di `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Zilla+Slab:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Spacing & Layout

Skala spacing berbasis 4px:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96` px — tersedia sebagai `--space-1` sampai `--space-9` di `tokens.css`.

- **Rata kiri** sebagai default untuk konten (bukan center-align) — mencerminkan gaya dokumen teknis/manifest, bukan gaya marketing yang "mendayu".
- Container max-width: `1200px`, dengan padding horizontal `--space-5` (24px) di mobile, `--space-8` (64px) di desktop.
- Grid produk **tidak** memakai kartu membulat seragam — gunakan baris list (lihat komponen "Manifest Row" di bawah).

### Wireframe Konsep Hero (Beranda)

```
┌───────────────────────────────────────────────────────────┐
│  [mark] Anchor Pakan Jaya      Produk  Tentang  Kontak     │
├───────────────────────────────────────────────────────────┤
│                                    ┌───────────────────┐   │
│  Bahan baku pakan ternak           │  ⚓ (watermark)     │   │
│  yang konsisten mutunya.           │                     │   │
│                                    │  Kapasitas: xx ton  │   │
│  Sub-headline pendek 1–2 baris     │  Sertifikasi: ISO.. │   │
│  menjelaskan value proposition.    │  Melayani sejak: .. │   │
│                                    │                     │   │
│  [ Lihat Produk ]  [ Hubungi Sales]└───────────────────┘   │
│  (58% lebar)                          (42% lebar, navy)    │
└───────────────────────────────────────────────────────────┘
```
Panel kanan berperan seperti "kartu manifest" — bukan ilustrasi dekoratif, tapi menyajikan fakta (kapasitas, sertifikasi) secara ringkas dengan watermark jangkar tipis sebagai identitas.

---

## 4. Radius, Border & Shadow

Radius **sengaja dibedakan per elemen**, bukan satu nilai untuk semua (menghindari kesan "kit kartu SaaS"):

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `--radius-sharp` | 0px | Baris tabel/manifest, divider |
| `--radius-sm` | 2px | Tombol, input, tag |
| `--radius-md` | 4px | Panel/card besar (mis. panel hero) |
| `--radius-full` | 999px | Hanya tombol aksi mengambang (WhatsApp) |

**Border & shadow:**
- Pemisah antar elemen memakai **garis tipis 1px** (`--border-hairline`), bukan shadow abu-abu lembut.
- Shadow (`--shadow-float`) hanya dipakai untuk elemen yang benar-benar melayang di atas layout (floating button, modal) — bukan dekorasi di kartu biasa.

---

## 5. Komponen Kunci

### Tombol
- **Primer** — background Anchor Navy, teks putih, radius 2px. Hover → Anchor Navy Dark.
- **Sekunder** — outline Anchor Navy 1.5px, teks Anchor Navy, background transparan. Hover → background Limestone.
- **Tersier (link)** — teks Grain Gold Dark, underline saat hover saja (bukan permanen).
- Label tombol pakai kata kerja aktif & jelas: "Lihat Produk", "Hubungi Sales" — bukan "Submit" atau ditambah tanda panah "→".

### Tag/Badge Kategori
- Background Pasture Green, teks putih, radius 2px, padding `--space-1` `--space-3`.
- Sentence case: "Unggas", bukan "UNGGAS".

### Manifest Row (pengganti product card)
Baris data rata kiri dengan kolom: nama produk — grade — kemasan — tombol aksi. Dipisah `--border-hairline` per baris, tanpa shadow, radius 0. Saat hover, background berubah ke Limestone tipis sebagai indikasi interaktif — bukan efek elevasi.

### Form Input
- Border 1px Slate Grey, radius 2px, padding `--space-3`.
- Focus state: border Anchor Navy 1.5px + outline tipis Grain Gold (bukan glow biru default browser).
- Label di atas input, sentence case, ukuran `--fs-micro`.

---

## 6. Motion

Gunakan gerakan seminimal dan sesedikit mungkin:
- Transisi hover (warna, border) — `--duration-fast` (120ms), `--ease-standard`.
- **Satu** momen animasi yang disengaja boleh dipakai di hero (misalnya watermark jangkar fade-in halus saat load) — bukan efek fade-slide-up di setiap section/card, itu pola generik yang harus dihindari.
- Hormati `prefers-reduced-motion`.

---

## 7. Yang Disengaja Dihindari

Supaya desain ini tidak terasa seperti template AI generik:
- ❌ Label eyebrow ALL-CAPS di atas heading
- ❌ Tombol dengan tanda panah "→" di akhir teks
- ❌ Radius seragam di semua elemen (kartu, tombol, gambar semua sama)
- ❌ Shadow abu-abu lembut (`rgba(0,0,0,.1)`) di bawah setiap kartu
- ❌ Latar krem hangat + serif kontras tinggi + aksen terracotta (kombinasi klise AI saat ini)
- ❌ Font monospace untuk label kecil/data

---

## 8. Struktur File yang Disarankan (Vite)

```
src/
  styles/
    tokens.css       ← import sekali di main.jsx
  components/
    Button.jsx
    Tag.jsx
    ManifestRow.jsx
    ProductCard.jsx (jika tetap butuh varian card, ikuti radius-md)
```

Lihat `tokens.css` untuk seluruh CSS custom properties, dan `style-guide.html` untuk pratinjau visual semua elemen di atas.
