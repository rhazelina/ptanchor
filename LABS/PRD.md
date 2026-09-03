# Product Requirements Document (PRD)
## Website Company Profile PT Anchor Pakan Jaya

| Item | Keterangan |
|---|---|
| Nama Proyek | Website Company Profile & Katalog Produk PT Anchor Pakan Jaya |
| Klien | PT Anchor Pakan Jaya (nama sementara, tahap prototype) |
| Industri | Bahan baku & aditif pakan ternak (feed raw material & feed additive supplier) |
| Tahap | Prototype / Proof of Concept |
| Versi Dokumen | 1.0 |
| Tanggal | 3 September 2026 |
| Disusun oleh | — |
| Status | Draft untuk review klien |

---

## 1. Latar Belakang

PT Anchor Pakan Jaya bergerak di bidang penyediaan bahan baku dan bahan tambahan (additive) untuk pakan ternak — misalnya mineral, toxin binder, dan bahan baku sejenis. Saat ini perusahaan belum memiliki representasi digital yang memadai untuk memperkenalkan produk, kapasitas produksi, dan kredibilitas perusahaan kepada calon pembeli (pabrik pakan, distributor, peternak skala besar).

Klien memberikan dua referensi website sejenis di industri mineral/bahan baku pakan:
1. **Jagdamba Minerals** — pendekatan katalog produk yang ringkas dan action-oriented (fokus ke "hubungi sekarang" per produk).
2. **20 Microns** — pendekatan company profile korporat yang lebih lengkap (profil perusahaan, sertifikasi, aplikasi produk per industri, berita).

Karena proyek masih tahap **prototype**, PRD ini menyederhanakan fitur dari kedua referensi menjadi versi inti yang cukup untuk demo/validasi konsep ke klien, tanpa kompleksitas backend penuh (e-commerce, multi-user, dsb).

## 2. Tujuan Produk

- Memberikan wajah digital profesional bagi PT Anchor Pakan Jaya sebagai supplier bahan baku pakan ternak.
- Menampilkan katalog produk (kategori, spesifikasi, aplikasi) dengan rapi dan mudah dicari.
- Memudahkan calon buyer (B2B) untuk menghubungi sales/meminta penawaran harga.
- Membangun kepercayaan melalui informasi sertifikasi, kapasitas produksi, dan profil perusahaan.
- Menjadi basis (prototype) yang bisa dikembangkan lebih lanjut ke versi produksi (mis. tambah CMS penuh, multi-bahasa, portal customer).

## 3. Target Pengguna

| Persona | Deskripsi | Kebutuhan Utama |
|---|---|---|
| Purchasing Pabrik Pakan | Staf pengadaan di pabrik pakan ternak (feed mill) | Cari spesifikasi produk, minta quotation, cek sertifikasi/kualitas |
| Distributor / Trader | Perantara yang menjual kembali ke peternak | Info produk lengkap, kontak cepat, kapasitas stok |
| Peternak skala menengah-besar | Membeli langsung bahan baku dalam jumlah besar | Info produk sederhana, cara kontak yang mudah (WhatsApp/telepon) |
| Internal (Marketing/Sales PT Anchor Pakan Jaya) | Mengelola informasi yang ditampilkan | Update produk/berita tanpa perlu developer (nice to have di tahap prototype) |

## 4. Insight dari Referensi (Disederhanakan)

| Fitur di Referensi | Sumber | Diadopsi ke Prototype? |
|---|---|---|
| Katalog produk dengan grade, kemasan, aplikasi | Jagdamba Minerals | ✅ Ya (disederhanakan) |
| Tombol kontak instan (Call/WhatsApp) di tiap produk | Jagdamba Minerals | ✅ Ya |
| Profil perusahaan, sertifikasi, milestone | 20 Microns | ✅ Ya (versi ringkas) |
| Halaman "Aplikasi/Industri" terpisah per sektor | 20 Microns | ⚠️ Disederhanakan jadi tag/kategori di produk, bukan halaman terpisah |
| Portal Investor (laporan keuangan, RUPS, dsb) | 20 Microns | ❌ Tidak relevan, di-skip |
| Halaman Karir & lamaran kerja | 20 Microns | ❌ Out of scope untuk prototype |
| Blog/Berita & Press Release | 20 Microns | ⚠️ Nice to have, bukan prioritas MVP |
| Form dengan captcha, upload brosur PDF | 20 Microns | ⚠️ Disederhanakan jadi form kontak biasa |
| Multi-bahasa | 20 Microns (implisit) | ❌ Out of scope prototype (bisa 1 bahasa dulu: Indonesia) |

## 5. Ruang Lingkup (Scope)

### 5.1 Dalam Lingkup (In Scope – Prototype)
- Website statis/company profile, single language (Bahasa Indonesia)
- Maks. ±6–7 halaman utama
- Katalog produk dengan halaman detail per produk
- Form/kontak menuju WhatsApp & email (tanpa proses transaksi/e-commerce)
- Desain responsif (desktop & mobile)

### 5.2 Di Luar Lingkup (Out of Scope – Prototype)
- E-commerce/keranjang belanja & pembayaran online
- Multi-bahasa
- Portal investor / laporan keuangan
- Halaman karir & sistem lamaran kerja
- Login/akun customer, dashboard tracking pesanan
- CMS penuh (tahap prototype bisa pakai konten statis/dummy; CMS sederhana masuk kategori *nice to have*)

## 6. Sitemap (Struktur Halaman)

```
Beranda (Home)
├── Tentang Kami
├── Produk
│   └── Detail Produk (per item)
├── Sertifikasi & Kualitas (bisa digabung ke "Tentang Kami" jika ingin lebih ringkas)
├── Berita/Artikel (opsional - nice to have)
├── Kontak
└── (Global) Tombol WhatsApp mengambang (floating button)
```

## 7. Daftar Fitur — Prioritas MoSCoW

### 7.1 Must Have (MVP Prototype)

| ID | Fitur | Deskripsi Singkat |
|---|---|---|
| F-01 | Halaman Beranda | Hero banner, ringkasan perusahaan, kategori produk unggulan, CTA "Hubungi Kami" |
| F-02 | Halaman Tentang Kami | Profil singkat, visi & misi, keunggulan perusahaan |
| F-03 | Daftar Produk (Katalog) | List produk per kategori, foto, nama, deskripsi singkat |
| F-04 | Detail Produk | Spesifikasi (grade, kemasan, aplikasi), foto produk, tombol "Minta Penawaran" |
| F-05 | Tombol Kontak Instan | Klik-untuk-WhatsApp & klik-untuk-telepon di header dan tiap produk |
| F-06 | Halaman Kontak | Form kontak sederhana (nama, perusahaan, email, no. HP, pesan), alamat kantor/pabrik, peta lokasi (embed Google Maps) |
| F-07 | Navigasi & Footer Global | Menu utama, footer berisi info kontak, sosial media (jika ada) |
| F-08 | Desain Responsif | Tampil baik di desktop, tablet, dan mobile |

### 7.2 Should Have

| ID | Fitur | Deskripsi Singkat |
|---|---|---|
| S-01 | Filter/Kategori Produk | Filter produk berdasarkan kategori (mineral, additive, dsb) atau jenis ternak (unggas, ruminansia, dsb) |
| S-02 | Halaman Sertifikasi | Menampilkan logo/badge sertifikasi (ISO, GMP+, halal, dsb — placeholder dulu) |
| S-03 | Search Produk | Kolom pencarian sederhana di halaman katalog |

### 7.3 Could Have (Nice to Have)

| ID | Fitur | Deskripsi Singkat |
|---|---|---|
| C-01 | Halaman Berita/Artikel | Update sederhana seperti blog untuk SEO & kredibilitas |
| C-02 | CMS Ringan | Admin panel sederhana agar tim internal bisa update produk/berita sendiri |
| C-03 | Download Brosur/Katalog PDF | Tombol unduh brosur produk dalam format PDF |
| C-04 | Formulir Minta Penawaran Terstruktur | Form khusus RFQ (jenis produk, jumlah, alamat pengiriman) — bukan sekadar form kontak umum |

### 7.4 Won't Have (Tahap Prototype Ini)
- E-commerce & payment gateway
- Multi-bahasa
- Login customer / member area
- Portal investor & halaman karir

## 8. User Flow Utama

**Flow 1 – Calon Buyer Mencari Produk & Menghubungi Sales**
1. User membuka Beranda → melihat kategori produk unggulan
2. Klik "Lihat Produk" → masuk ke halaman Katalog Produk
3. (Opsional) Filter berdasarkan kategori/jenis ternak
4. Klik salah satu produk → masuk ke Detail Produk (lihat spesifikasi)
5. Klik "Minta Penawaran" atau ikon WhatsApp → terhubung ke chat WhatsApp sales dengan pesan pre-filled (nama produk)

**Flow 2 – Calon Buyer Ingin Verifikasi Kredibilitas Perusahaan**
1. User membuka Beranda → klik menu "Tentang Kami"
2. Melihat profil perusahaan, sertifikasi
3. Klik "Kontak" untuk menghubungi lebih lanjut

**Flow 3 – User Mengisi Form Kontak**
1. User buka halaman Kontak
2. Isi form (nama, perusahaan, email, no. HP, pesan)
3. Submit → notifikasi sukses ditampilkan → data terkirim ke email tim sales (untuk prototype bisa disimulasikan/dummy)

## 9. Functional Requirements (Detail)

### 9.1 Beranda
- FR-1.1: Menampilkan hero section dengan tagline perusahaan dan CTA utama
- FR-1.2: Menampilkan 3–6 kategori/produk unggulan sebagai highlight
- FR-1.3: Menampilkan ringkasan singkat "Tentang Kami" dengan link "Selengkapnya"
- FR-1.4: Menampilkan tombol floating WhatsApp di semua halaman

### 9.2 Katalog Produk
- FR-2.1: Menampilkan produk dalam bentuk grid/card (foto, nama, kategori singkat)
- FR-2.2: (Should have) Filter berdasarkan kategori produk
- FR-2.3: Klik card produk mengarah ke halaman Detail Produk

### 9.3 Detail Produk
- FR-3.1: Menampilkan nama produk, deskripsi, spesifikasi (grade, kandungan, kemasan)
- FR-3.2: Menampilkan foto produk (minimal 1, idealnya galeri)
- FR-3.3: Menampilkan tag aplikasi (contoh: pakan unggas, pakan ruminansia, aquaculture)
- FR-3.4: Tombol "Minta Penawaran" yang mengarah ke WhatsApp dengan pesan otomatis berisi nama produk

### 9.4 Kontak
- FR-4.1: Form kontak dengan validasi input dasar (field wajib, format email/no. HP)
- FR-4.2: Menampilkan alamat kantor/pabrik dan peta (embed Google Maps)
- FR-4.3: Menampilkan nomor telepon, email, dan link WhatsApp resmi perusahaan

## 10. Non-Functional Requirements

| Kategori | Kebutuhan |
|---|---|
| Performa | Waktu muat halaman < 3 detik pada koneksi standar |
| Kompatibilitas | Tampil baik di browser modern (Chrome, Safari, Edge, Firefox) dan perangkat mobile |
| Aksesibilitas | Kontras warna & ukuran font layak baca (dasar, belum full WCAG untuk tahap prototype) |
| SEO Dasar | Meta title & description per halaman, struktur heading yang benar |
| Keamanan | Form kontak terlindungi dari spam dasar (misal reCAPTCHA sederhana) — nice to have |

## 11. Rekomendasi Pendekatan Teknis (Tahap Prototype)

Karena tujuannya masih *prototype* (bukan production penuh), disarankan:
- Front-end: static site atau sederhana (misal React/Next.js, atau bahkan HTML/CSS statis) agar cepat dibangun dan direview klien
- Data produk bisa berupa data statis (JSON/hardcoded) dulu — belum perlu database/CMS penuh
- Hosting sementara bisa pakai platform cepat deploy (Vercel/Netlify) untuk keperluan demo ke klien
- Integrasi WhatsApp cukup pakai link `wa.me` dengan pesan pre-filled, belum perlu API resmi WhatsApp Business

*(Catatan: bagian ini rekomendasi awal, bisa disesuaikan dengan preferensi tim development.)*

## 12. Metrik Keberhasilan Prototype

- Klien dapat memvalidasi struktur informasi & alur navigasi dengan mudah
- Minimal 1 alur utama (cari produk → kontak sales) bisa didemokan end-to-end
- Feedback klien terhadap desain & fitur bisa dikumpulkan untuk iterasi ke tahap berikutnya (MVP produksi)

## 13. Open Questions untuk Klien

1. Apakah ada daftar produk final (nama, kategori, spesifikasi) yang bisa dipakai untuk konten katalog?
2. Apakah sudah ada sertifikasi resmi (ISO, GMP+, halal, dll) yang ingin ditampilkan?
3. Apakah nomor WhatsApp/telepon sales sudah ditentukan untuk tombol kontak?
4. Apakah dibutuhkan halaman Berita/Blog di tahap prototype ini, atau bisa menyusul di tahap berikutnya?
5. Apakah tim internal PT Anchor Pakan Jaya membutuhkan admin panel untuk update konten sendiri, atau konten akan dikelola oleh tim development untuk sementara?

---
*Dokumen ini adalah draf awal PRD untuk kebutuhan prototype dan dapat direvisi berdasarkan masukan dari klien.*
